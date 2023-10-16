import { Users } from "../models/users";
import { Response, Request } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const create = async (req: Request,  res: Response) => {
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

        const user = {
            ...response.toObject(),
            password: undefined
        }

        // Status 201 quando se cria algo no banco
        return res.status(201).json({ user ,message: "Cadastro realizado!" })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Erro ao cadastrar usuario!" })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const {
            email,
            password
        } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'Todos os campos são obrigatorios!' });
        }
        
        // encontrando o email 
        const user = await Users.findOne({ email: email })

        // se nao existir usuario com email existente ou a senha for diferente da que está no banco
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(404).json({ message: "Email ou senha incorreto"})
        }
        
        // Criando token juntamente do email
        const token = jwt.sign(
            { email },
            process.env.JWT_KEY as string,
            { expiresIn: '1w' }
          );
        
        // Salvando token no usuario
        user.token = token;
        await user.save()
        
        // Retornando as informações do usuario exceto a senha
        const userWithoutPassword = {
            ...user.toObject(), 
            password: undefined,
        }

        return res.status(200).json({userWithoutPassword, message: "Login realizado com sucesso!"})

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Erro ao realizar o login!" })
    }
}
