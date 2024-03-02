import { Users } from "../models/users";
import { Response, Request } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const create = async (req: Request, res: Response) => {
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
        return res.status(201).json({ user, message: "Cadastro realizado!" })
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
            return res.status(404).json({ message: "Email ou senha incorreto" })
        }

        // Criando token juntamente do email
        const token = jwt.sign(
            { email },
            process.env.JWT_SECRET as string,
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

        return res.status(200).json({ userWithoutPassword, message: "Login realizado com sucesso!" })

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Erro ao realizar o login!" })
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        // Recuperando o Id do usuario
        const userId = req.params.userId

        // Verifica se veio algo no body
        if (!userId) {
            return res.status(400).json({ message: 'Usuario não identificado!' });
        }

        // Tentando encontrar o usuario pelo id
        const user = await Users.findOne({ _id: userId })

        // Tratativa caso nao encontre o usuario
        if (!user) {
            return res.status(400).json({ message: 'Usuario não identificado!' });
        }

        // Modificando o token do usuario para undefined
        user.token = ""
        user.save()

        return res.status(200).json({ message: "Logout realizado com sucesso!" })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Erro ao deslogar!" })
    }
}

export const edit = async (req: Request, res: Response) => {
    try {
        // Recuperando o Id do usuario
        const userId = req.params.userId

        // Verifica se veio algo no body
        if (!userId) {
            return res.status(400).json({ message: 'Usuario não encontrado!' });
        }

        // Buscando usuario pelo ID
        const user = await Users.findOne({ _id: userId })

        // Verificando se retornou algum usuario
        if (!user) {
            return res.status(400).json({ message: 'Usuario não encontrado!' });
        }

        // Pegando as informações do body
        const { newFullname } = req.body

        // Verificando se veio algo no body
        if (!newFullname) {
            return res.status(400).json({ message: 'Por favor, insira um nome para poder editar!' });
        }

        // Alterando o nome do usuario
        user.fullname = newFullname
        user.save()

        const userWithoutPassword = {
            ...user.toObject(),
            password: undefined,
        }

        return res.status(200).json({ userWithoutPassword, message: "Nome alterado com sucesso!" })

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Erro ao editar!" })
    }
}

export const changePassword = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId

        if (!userId) {
            return res.status(400).json({ message: 'Usuario não encontrado!' });
        }

        const user = await Users.findOne({ _id: userId })

        if (!user) {
            return res.status(400).json({ message: 'Usuario não encontrado!' });
        }

        const { newPassword } = req.body

        if (!newPassword) {
            return res.status(400).json({ message: 'Por favor, insira uma nova senha!' });
        }

        // Verificando se a senha é adequada
        if (newPassword.length < 10 || newPassword.length > 50) {
            return res.status(400).json({ message: 'Por favor, insira uma senha entre 10 a 50 caracteres!' })
        }

        // Encriptografando a senha
        const salt = await bcrypt.genSalt(10)
        const passwordEncrypted = await bcrypt.hash(newPassword, salt)

        user.password = passwordEncrypted
        user.save()

        return res.status(200).json({ message: "Senha alterada com sucesso!" })

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Erro ao alterar senha!" })
    }
}

export const exclude = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId

        if (!userId) {
            return res.status(400).json({ message: 'Usuario não encontrado!' });
        }

        const deleteUser = await Users.deleteOne({ _id: userId })

        if (!deleteUser) {
            return res.status(400).json({ message: 'Erro ao excluir usuario!' });
        }

        return res.status(200).json({ message: "Usuario excluido com sucesso!" })

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Erro ao excluir usuario!" })
    }
}
