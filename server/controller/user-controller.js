import User from '../model/user.js';

export const signupUser = (request, response) => {
  try {
    const user = request.body;
    const newUser = new User(user);
    newUser.save();
    return response.status(200).json({ msg: 'Signup successfull' });
  } catch (error) {
    return response
      .status(500)
      .json({ msg: 'Error while signing up the user' });
  }
};
