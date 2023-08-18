import { Users } from "../models/Users";
import { Request, Response } from 'express' 

export interface TypedRequest<T, P> extends Express.Request {
    body: T,
    params: P
}


export const usersController = {
    create: async function (req: TypedRequest<{fullname: string, email: string, password: string}, {}>, res: Response) {
        try {
            // Pegando infos que vem da requisicao no front
            
            const user = {
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password
            }

            // Fazendo operação no BD, no caso, criacao aqui
            const response = await Users.create(user);
            // Status 201 quando se cria algo no banco
            return res.status(201).json({response, msg: "Usuario cadastrado com sucesso!"})
        }
        catch(err) {
            console.log(err)
        }
    }
}