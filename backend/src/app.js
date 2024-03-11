import express from "express";
import cors from "cors";
import { router as urlRoute } from "./routes/url.routes.js";

var corsOptions = {
	origin: "*",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/url", urlRoute);

export { app };
