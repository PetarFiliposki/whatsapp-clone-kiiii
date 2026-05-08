import mongoose from "mongoose";

const DATABASE_CONNECTION_STRING = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/WhatsappClone'

mongoose
  .connect(DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log("Mongoose Error 2 : " + JSON.stringify(err));
  });

export default mongoose.connection;