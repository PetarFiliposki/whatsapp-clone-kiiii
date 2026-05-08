import mongoose from "mongoose";

const DATABASE_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/WhatsappClone'
// const DATABASE_CONNECTION_STRING =
//    "mongodb+srv://peckooo460_db_user:bMWAaXoMLhG69deu@whatsappclone.lu4tthc.mongodb.net/?retryWrites=true&w=majority&appName=WhatsAppClone"
mongoose
  .connect(DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log("Mongoose Error 2 : " + JSON.stringify(err));
  });

export default mongoose.connection;