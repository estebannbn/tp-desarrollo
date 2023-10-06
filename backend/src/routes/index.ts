import express, {Request, Response} from "express";
import {PrismaClient} from '@prisma/client'
import validateResource from "../middlewares/validateResource";
import {createUserSchema} from "../schema/user.schema";
import {createUserController} from "../controllers/user.controllers";

const prisma = new PrismaClient()
const routes = express.Router()

routes.route('/api/users')
    .post(validateResource(createUserSchema),createUserController)

export default routes