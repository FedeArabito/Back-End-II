import { mongoose } from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://coderBack-II:coderBack-II@coderbackend.4yoj2.mongodb.net/coderhouse70280", {
      
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default dbConnect