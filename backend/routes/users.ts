import { Router } from "express";
import { usersController } from "../controllers/usersController";

// para criar endpoints e atrelar a um controller especifico

const router = Router()

// Nessa rota de /user, sera feito um post com os parametros vindos do front e usando eles dentro do meu usersController
export const userPost = () => {
    router.route("/user").post((req, res) => usersController.create(req, res))
}