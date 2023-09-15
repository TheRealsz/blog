// Centralizar todas as rotas aqui

import { Router } from "express";
import userRoutes  from "./users"

const router = Router()
// Todas as rotas de / + algo, ira vir de users
router.use("/users", userRoutes)

export default router
