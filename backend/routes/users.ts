import { Router } from "express";
import { create } from "../controllers/usersController";

// para criar endpoints e atrelar a um controller especifico

const router = Router()

router.post("/signup", create)

// Nessa rota de /user, sera feito um post com os parametros vindos do front e usando eles dentro do meu usersController
export default router