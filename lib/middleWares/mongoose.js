import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

const dataBaseMiddleWare = async (req, res, next) => {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(MONGODB_URI);
    }
  } catch (error) {
    res.status(500).send("error.message");
  }
  return next();
};

export default dataBaseMiddleWare;
