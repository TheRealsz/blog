// Centralizar todas as rotas aqui

import { Router } from "express";
import userRoutes  from "./users"
import postRoutes from "./posts"

const router = Router()
router.use("/user", userRoutes)
router.use("/post", postRoutes)

export default router
