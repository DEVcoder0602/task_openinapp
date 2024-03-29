import mongoose from "mongoose";

export async function dbConnect() {
  try {
    mongoose.connect(process.env.MONGO_URI);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongoose connected successfully");
    });

    connection.on("error", (error) => {
      console.log("Mongoose connection error: ", error);
      process.exit();
    });

    console.log("Connected to database: ", connection.connection.name);
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
}
