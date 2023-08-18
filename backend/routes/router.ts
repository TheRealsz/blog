// Centralizar todas as rotas aqui

import { Router } from "express";
import { userPost }  from "./users"

export const router = Router()

// Todas as rotas de / + algo, ira vir de users
router.use("/", userPost)

