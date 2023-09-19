import { Users } from "../models/Users";
import { Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export interface TypedRequest<T, P> extends Express.Request {
    body: T,
    params: P
}

export const create = async (req: TypedRequest<{ fullname: string, email: string, password: string }, {}>, res: Response) => {
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

        if (password.length < 10 || password.length > 50) {
            return res.status(400).json({ message: 'Por favor, insira uma senha entre 10 a 50 caracteres!' })
        }

        const salt = await bcrypt.genSalt(10)
        const passwordEncrypted = await bcrypt.hash(password, salt)

        // Fazendo operação no BD, no caso, criacao aqui
        const response = await Users.create({
            fullname,
            email,
            password: passwordEncrypted,
        });
        // Status 201 quando se cria algo no banco
        return res.status(201).json({ response, message: "Cadastro realizado!" })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Erro ao cadastrar usuario!" })
    }
}

export const login = async (req: TypedRequest<{ email: string, password: string }, {}>, res: Response) => {
    try {
        const {
            email,
            password
        } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'Todos os campos são obrigatorios!' });
        }

        const user = await Users.findOne({ email: email })

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(404).json({ message: "Email ou senha incorreto"})
        }

        const token = jwt.sign(
            { email },
            { expiresIn: '1w' }
          );
        
        return res.status(200).json({token, user, message: "Login realizado com sucesso!"})

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Erro ao realizar o login!" })
    }
}
