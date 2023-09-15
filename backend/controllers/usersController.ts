import { Users } from "../models/Users";
import { Request, Response } from 'express' 

export interface TypedRequest<T, P> extends Express.Request {
    body: T,
    params: P
}

export const create = async (req: TypedRequest<{fullname: string, email: string, password: string}, {}>, res: Response) => {
    try {
        // Pegando infos que vem da requisicao no front
        
        const {
            fullname,
            email,
            password
        } = req.body

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: 'Todos os campos são obrigatorios!' });
        }

        const existingUser = await Users.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'Email já cadastrado!' });
        }
          
        // Fazendo operação no BD, no caso, criacao aqui
        const response = await Users.create(user);
        // Status 201 quando se cria algo no banco
        return res.status(201).json({response, msg: "Usuario cadastrado com sucesso!"})
    }
    catch(err) {
        console.log(err)
        return res.status(500).json({error: "Erro ao cadastrar usuario!"})
    }
}
