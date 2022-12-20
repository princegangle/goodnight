import express from "express";
import {UserSignup} from "../controller/Usercontroll.js";

const Router = express.Router();

Router.post('/signup',UserSignup);  

export default Router;     


  

