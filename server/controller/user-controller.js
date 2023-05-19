import User from '../model/user.js';
import bcrypt from 'bcrypt';

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
