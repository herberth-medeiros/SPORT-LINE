import app from "./src/app.js";
import "dotenv/config.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is Running, http://localhost:${PORT}`);
});