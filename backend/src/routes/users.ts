import { Router } from "express";
import { create, login } from "../controllers/usersController";

// para criar endpoints e atrelar a um controller especifico

const router = Router()

router.post("/signup", create)
router.post("/login", login)

// Nessa rota de /user, sera feito um post com os parametros vindos do front e usando eles dentro do meu usersController
export default router