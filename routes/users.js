import Express  from "express";
const users = Express();
import { createUser } from "../controllers/usersController.js";

users.post('', createUser);


export {

    users

}