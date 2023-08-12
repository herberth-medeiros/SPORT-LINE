import mongoose from "mongoose";
import "dotenv/config.js";

mongoose.connect(process.env.DB_CONNECTION);

const db = mongoose.connection;

export default db;