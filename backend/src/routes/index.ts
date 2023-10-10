import express from "express";
import validateResource from "../middlewares/validateResource.js";
import {createUserSchema} from "../schema/user.schema.js";
import {createUserController} from "../controllers/user.controllers.js";

const routes = express.Router()

routes.route('/api/users')
    .post(validateResource(createUserSchema),createUserController)

routes.route('api/users/tecnicos')
    .get()
export default routes