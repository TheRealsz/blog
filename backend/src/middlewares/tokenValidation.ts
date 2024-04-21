import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import { Users } from "../models/users";


export const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {

    try {
        // Pegando o token
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader?.split(' ')[1]
        
        // Verificando se existe algo no Barear
        if (!token || token == "null") {
            return res.status(401).json({ message: 'Token de autorização ausente' });
        }
        // Comparando com o que se tem no .env  
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload

        if (!verifyToken) {
            return res.status(401).json({ message: "Token de autorização invalido" });
        }

        // Verificando se existe esse token e esta realmente linkado a algum usuario
        const users = await Users.findOne(
            {
                email: verifyToken.email
            }
        )

        // Caso não
        if (!users) {
            return res.status(401).json({ message: "Token de autorização invalido" });
        }
        
        req.users = users
        next()
    }
    catch (err) {

        if (err instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: "Token de autorização expirado" });
        }
        console.log(err)
        return res.status(500).json({ message: "Erro ao resgatar token!" })
    }
}

