import { Router } from "express";
import { create, login, logout } from "../controllers/usersController";
import { tokenValidation } from "../middlewares/tokenValidation";

// para criar endpoints e atrelar a um controller especifico

const router = Router()

router.post("/signup", create)
router.post("/login", login)
router.post("/logout", tokenValidation, logout)

// Nessa rota de /user, sera feito um post com os parametros vindos do front e usando eles dentro do meu usersController
export default router