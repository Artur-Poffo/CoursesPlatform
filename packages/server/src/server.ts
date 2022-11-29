import * as dotenv from "dotenv";

dotenv.config()

import express from "express"
import cors from "cors"
import { connect } from "mongoose"

import ApiRoutes from "./Routes/ApiRoutes"

const app = express()

connect(process.env.MONGO_URI || "mongodb://localhost/test")
  .then(() => console.log("MongoDB Connected!"))
  .catch(() => console.log("MongoDB error on connect!!!"))

const corsOptions = {
  origin: 'https://courseplatform.onrender.com',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use("/api", ApiRoutes)

app.listen(process.env.PORT || 3001, () => console.log("Server Running!"))