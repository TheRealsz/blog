import { Posts } from "../models/posts";
import { Request, Response } from "express";
import { Users } from "../models/users";


export const create = async (req: Request , res: Response) => {
    try {
        const authorID = req.params.userId

        if (!authorID) {
            return res.status(400).json({ message: "Usuario não encontrado!" })
        }

        const user = await Users.findOne({ _id: authorID })

        if (!user) {
            return res.status(404).json({ message: "Usuario não encontrado!" })
        }

        const {
            title,
            description
        } = req.body

        // Caso nao venha nada dos seguintes campos
        if (!title || !description) {
            return res.status(400).json({ message: "Todos os campos são obrigatorios!"})
        }
        // Populando o authorName
        const authorName = user?.fullname

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
        const formattedPosts = posts.map(post => {
            return {
                id: post._id,
                title: post.title,
                description: post.description,
                authorID: post.authorID[0],
                authorName: post.authorName,
                createdAt: post.createdAt
            }
        })
        return res.status(200).json(formattedPosts)
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
        const user = await Users.findById({ _id: userId })

        if (!post || !user) {
            return res.status(404).json({ message: "Post ou usuario não encontrado!" })
        }

        const authorPost = post?.authorID?.toString()

        if(authorPost !== userId) {
            return res.status(401).json({ message: "Usuario não autorizado!" })
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

        if (!updatedPost) {
            return res.status(404).json({ message: "Post não encontrado!" })
        }   

        return res.status(200).json({ message: "Post atualizado com sucesso!" })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Erro ao atualizar post!" })
    }
}

export const exclude = async (req: Request, res: Response) => {
    try {
        const postId = req.params.postId
        const userId = req.params.userId

        if (!postId || !userId) {
            return res.status(400).json({ message: "Post ou usuario não encontrado!" })
        }

        const post = await Posts.findById(postId)
        const user = await Users.findById({ _id: userId })

        if (!post || !user) {
            return res.status(404).json({ message: "Post ou usuario não encontrado!" })
        }

        const authorPost = post?.authorID?.toString()

        if(authorPost !== userId) {
            return res.status(401).json({ message: "Usuario não autorizado!" })
        }

        await Posts.findByIdAndDelete(postId)

        return res.status(200).json({ message: "Post excluido com sucesso!" })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Erro ao excluir post!" })
    }
}


