import mongoose from "mongoose";

// const { MONGODB_URI } = process.env;

const MONGODB_URI ="mongodb+srv://bryan:<password>@cluster0.wyarnsv.mongodb.net/?retryWrites=true&w=majority"; 

console.log(MONGODB_URI);
if (!MONGODB_URI) {
	throw new Error("MONGODB_URI must be defined");
}

export const connectDB = async () => {
	try {
		const { connection } = await mongoose.connect(MONGODB_URI);
		if (connection.readyState === 1) {
			console.log("MongoDB Connected");
			return Promise.resolve(true);
		}
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};
