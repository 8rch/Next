import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
	{
		email: {
			type: String,
			unique: true,
			required: [true, "Se requiere Email"],
			match: [
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
				"Email is invalid",
			],
		},
		password: {
			type: String,
			required: [true, "Se requiere Password "],
			select: false,
		},
		fullname: {
			type: String,
			required: [true, "Se requiere Nombre Completo"],
			minLength: [3, "fullname must be at least 3 characters"],
			maxLength: [20, "fullname must be at most 20 characters"],
		},
	},
	{
		timestamps: true,
	}
);

const User = models.User || model("User", UserSchema);
export default User;
