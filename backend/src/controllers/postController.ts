import { Posts } from "../models/posts";
import { Request, Response } from "express";
import { Users } from "../models/users";


export const create = async (req: Request , res: Response) => {
    try {
        const {
            title,
            description,
            authorID,
        } = req.body

        // Caso nao venha nada dos seguintes campos
        if (!title || !description) {
            return res.status(400).json({ message: "Todos os campos são obrigatorios!"})
        }

        // Caso não haja autor do post
        if (!authorID) {
            return res.status(400).json({ message: "Usuario não encontrado em nosso banco de dados!" })
        }

        // Populando o authorName
        const author = await Users.findOne({ _id: authorID })
        const authorName = author?.fullname

        // Criando post
        const post = await Posts.create({
            title,
            description,
            authorID,
            authorName
        })

        return res.status(201).json({post, message: "Post criado com sucesso!"})
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Erro ao criar post!" })
    }   
}