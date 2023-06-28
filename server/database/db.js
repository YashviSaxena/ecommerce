import mongoose from 'mongoose';


 const Connection = async(username,password) => {
  const DATABASE_URL = `${username}:${password}@cluster0.akzqwg7.mongodb.net`;
  try {
    await mongoose.connect(`mongodb+srv://${DATABASE_URL}/?retryWrites=true&w=majority`, { useNewUrlParser: true });
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.log("The error during connection is", error.message);
  }
}

export default Connection;