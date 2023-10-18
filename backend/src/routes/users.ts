import { Router } from "express";
import { changePassword, create, edit, exclude, login, logout } from "../controllers/usersController";
import { tokenValidation } from "../middlewares/tokenValidation";

// para criar endpoints e atrelar a um controller especifico

const router = Router()

router.post("/signup", create)
router.post("/login", login)
router.post("/logout/:userId", tokenValidation, logout)
router.put("/edit/:userId", tokenValidation, edit)
router.put("/edit/password/:userId", tokenValidation, changePassword)
router.delete("/delete/:userId", tokenValidation, exclude)

// Nessa rota de /user, sera feito um post com os parametros vindos do front e usando eles dentro do meu usersController
export default router