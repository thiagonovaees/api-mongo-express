import { author } from '../models/Author.js'

class AuthorController {

    static async getAuthorList (req, res) {
        try {
            const authorList = await author.find({})
            res.status(200).json(authorList)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` })
        }
    }

    static async getAuthorsById (req, res) {
        try {
            const id = req.params.id
            const authorFound = await author.findById(id)
            res.status(200).json(authorFound)
        } catch (error) {
            res.status(500).json({ 
                message: `${error.message} - falha ao cadastrar autor`
            })
        }
    }

    static async addNewAuthor (req, res) {
        try {
            const newAuthor = await author.create(req.body)
            res.status(200).json({
                message: 'Criado com sucesso',
                author: newAuthor
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - erro ao cadastrar autor`
            })
        }
    }

    static async updateAuthor (req, res) {
        try {
            const id = req.params.id
            await author.findByIdAndUpdate(id, req.body)
            res.status(200).json({
                message: 'Autor atualizado'
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha na atualização`
            })
        }
    }

    static async deleteAuthor (req, res) {
        try {
            const id = req.params.id
            await author.findByIdAndDelete(id)
            res.status(200).json({
                message: 'Autor deletado com sucesso'
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao excluir autor`
            })
        }
    }
}

export default AuthorController