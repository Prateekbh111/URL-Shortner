import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
	{
		shortId: {
			type: String,
			required: true,
			unique: true,
		},
		redirectedURL: {
			type: String,
			required: true,
		},
		visitHistory: [{ timeStamp: { type: Number } }],
	},
	{ timeStamp: true }
);

export const URL = mongoose.model("URL", urlSchema);
