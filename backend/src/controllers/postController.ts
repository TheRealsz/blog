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

export const getAll = async (req: Request, res: Response) => {
    try {
        const posts = await Posts.find()
        return res.status(200).json(posts)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Erro ao buscar posts!" })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const postId = req.params.postId
        const userId = req.params.userId

        if (!postId || !userId) {
            return res.status(400).json({ message: "Post ou usuario não encontrado!" })
        }

        const post = await Posts.findById(postId)
        const authorPost = post?.authorID?.toString()

        if(authorPost !== userId) {
            return res.status(400).json({ message: "Usuario não autorizado!" })
        }

        const {
            title,
            description
        } = req.body

        // Verifica se ambos os campos estão vazios
        if (!title && !description) {
            return res.status(400).json({ message: "Preencha pelo menos um dos campos para editar!" })
        }
        // Atualiza o post
        const updatedPost = await Posts.findByIdAndUpdate(postId, {
            title: title || post?.title,
            description: description || post?.description
        }, { new: true })

        return res.status(200).json({ updatedPost, message: "Post atualizado com sucesso!" })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Erro ao atualizar post!" })
    }
}


