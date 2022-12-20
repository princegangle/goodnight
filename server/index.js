import dotenv from "dotenv";
import express from "express";
import connection from "./dadabase/db.js";
import Router from "./Routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

import Defaultdata   from "./Default.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`running sucssefully${PORT}`));

Defaultdata();
