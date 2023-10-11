import express from "express";
import validateResource from "../middlewares/validateResource.js";
import {createUserSchema} from "../schema/user.schema.js";
import {createSessionController, createUserController} from "../controllers/user.controllers.js";
import {createSessionSchema} from "../schema/create.session.js";

const routes = express.Router()

routes.route('/api/users')
    .post(validateResource(createUserSchema),createUserController)
    .get(validateResource(createSessionSchema),createSessionController)

export default routes