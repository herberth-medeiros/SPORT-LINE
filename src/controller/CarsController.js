import Carros from "../models/Carros.js";


class CarrosController {

	static listarCarros = async (req, res) => {

		const id = req.params.body;
  
		try{
			const AllCars = await Carros.find(id);
  
			res.status(200).json({AllCars});
		}catch(error){
			res.status(401).json({message: "Internal Server Error"});
		}
	};

	static listarCarrosId = async (req, res) => {
	
		const { name, pride, brand, model} = req.query;

		const busca = {};

		if(name) busca.name = {$regex: name, $options: "i"};
		if(pride) busca.pride = {$regex: pride, $options: "i"};
		if(brand) busca.brand = {$regex: brand, $options: "i"};
		if(model) busca.model = {$regex: model, $options: "i"};

		try{
			const carrosId = await Carros.find(busca);

			res.status(200).json({carrosId});

		}catch(error){
			res.status(402).send({message: "Carro não encontrado"});
		}
	};

	static cadastroCarros = async (req, res) => {
		const {name, price , model, type, brand} = req.body;
  
		if(!name){
			return res.status(422).json({message: "Car name required for registration"});
		}
  
		if(!price){
			return res.status(422).json({message: "Car price required to register the car"});
		}
  
		if(!model){
			return res.status(422).json({message: "Model required to register it"});
		}
  
		if (!type){
			return res.status(422).json({message: "Required type to register the same"});
		}
  
		if (!brand){
			return res.status(422).json({message: "Car brand required for registration"});
		}
  
		const cars = new Carros({
			name,
			price,
			model,
			type,
			brand
		});
  
		try{
			await cars.save();
  
			res.status(200).send({message:"successfully registered car"});
  
		}catch(error){
			res.status(500).send({message: "Internal server error"});
		}
	};

	static atualizarCarros = async (req, res) => {
		const id = req.params.id;
  
		const updateCar = await Carros.findByIdAndUpdate(id, {$set: req.body});
  
		try{
			res.status(200).json({message:"updated car registration", updateCar});
		}catch(error){
			res.status(404).json({message: "not update car registration"});
		}
	};

	static comprarCarro = async (req, res) => {
		const id = req.params.id;
  
		const BuyCar = await Carros.findByIdAndDelete(id);
  
		try{
			res.status(200).json({message: "bought car", BuyCar});
		}catch(error){
			res.status(404).json({message: "Carro nao comprado"});
  
		}
	};
}


export default CarrosController;