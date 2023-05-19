import mongoose from 'mongoose';

const Connection = async (username, password) => {
  const baseURL = `mongodb+srv://${username}:${password}@blog-app.6g9ds58.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(baseURL, { useNewUrlParser: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error connecting with database', error);
  }
};

export default Connection;
