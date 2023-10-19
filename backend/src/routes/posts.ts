import { Router } from "express";
import { create, exclude, getAll, update } from "../controllers/postController";
import { tokenValidation } from "../middlewares/tokenValidation";


const router = Router()

router.post("/create/:userId", tokenValidation, create)
router.get("/getAll", tokenValidation, getAll)
router.put("/edit/:postId/:userId", tokenValidation, update)
router.delete("/delete/:postId/:userId", tokenValidation, exclude)

export default router