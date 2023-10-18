import { Router } from "express";
import { create, getAll } from "../controllers/postController";
import { tokenValidation } from "../middlewares/tokenValidation";


const router = Router()

router.post("/create", tokenValidation, create)
router.get("/getAll", tokenValidation, getAll)

export default router