import { Router } from "express";
import { create } from "../controllers/postController";
import { tokenValidation } from "../middlewares/tokenValidation";


const router = Router()

router.post("/create", tokenValidation, create)

export default router