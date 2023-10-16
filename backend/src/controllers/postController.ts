import { Posts } from "../models/posts";
import { Request, Response } from "express";


export const create = async (req: Request , res: Response) => {
    try {
        const {
            title,
            description,
            author,
        } = req.body

        // Caso nao venha nada dos seguintes campos
        if (!title || !description) {
            return res.status(400).json({ message: "Todos os campos são obrigatorios!"})
        }

        // Caso não haja autor do post
        if (!author) {
            return res.status(400).json({ message: "Usuario não encontrado em nosso banco de dados!" })
        }

        // Criando post
        const post = await Posts.create({
            title,
            description,
            author
        })

        return res.status(201).json({post, message: "Post criado com sucesso!"})
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Erro ao criar post!" })
    }   
}