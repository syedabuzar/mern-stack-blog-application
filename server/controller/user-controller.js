import User from '../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../model/token.js';

dotenv.config();

export const signupUser = async (request, response) => {
  try {
    const hashedPass = await bcrypt.hash(request.body.password, 10);

    const user = {
      username: request.body.username,
      name: request.body.name,
      password: hashedPass,
    };
    const newUser = new User(user);
    newUser.save();
    return response.status(200).json({ msg: 'Signup successfull' });
  } catch (error) {
    return response
      .status(500)
      .json({ msg: 'Error while signing up the user' });
  }
};

export const loginUser = async (request, response) => {
  let user = await User.findOne({ username: request.body.username });
  if (!user) {
    return response.status(400).json({ msg: 'Username does not match' });
  }

  try {
    let match = await bcrypt.compare(request.body.password, user.password);
    if (match) {
      const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN, {
        expiresIn: '15m',
      });
      const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN);

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      response.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        name: user.name,
        username: user.username,
      });
    } else {
      response.status(400).json({ msg: 'Password does not match' });
    }
  } catch (error) {
    response.status(500).json({ msg: 'error while login the user' });
  }
};
