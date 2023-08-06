import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bancodedados86:123@nodeapi.a8syvcg.mongodb.net/sport-line");

const db = mongoose.connection;

export default db;