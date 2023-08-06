import mongoose from "mongoose";

const Carros = mongoose.model("Cars",{
	name: String,
	price: Number,
	model: String,
	type: String,
	brand: String
});

export default Carros;


