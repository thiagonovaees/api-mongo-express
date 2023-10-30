import { author } from '../models/Author.js'
import book from '../models/Book.js'

class BookController {

    static async getBookList (req, res) {
        try {
            const bookList = await book.find({})
            res.status(200).json(bookList)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` })
        }
    }

    static async getBooksById (req, res) {
        try {
            const id = req.params.id
            const bookFound = await book.findById(id)
            res.status(200).json(bookFound)
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha na requisição do livro`
            })
        }
    }

    static async getBooksByPublisher (req, res) {
        const publisher = req.query.publisher
        try {
            const booksByPublisher = await book.find({ publishing: publisher})
            res.status(200).json(booksByPublisher)
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha na requisição do livro`
            })
        }
    }

    static async addNewBook (req,res) {
        const newBook = req.body
        try {
            const authorFound = await author.findById(newBook.author)
            const completBook = {...newBook, author: {...authorFound._doc }}
            const createdBook = await book.create(completBook)
            res.status(201).json({
                message: 'Livro criado com sucesso',
                book: createdBook
            })
        } catch (error) {
            res.status(500).json({ 
                message: `${error.message} - falha ao cadastrar livro`
            })
        }
    }

    static async updateBook (req, res) {
        try {
            const id = req.params.id
            await book.findByIdAndUpdate(id, req.body)
            res.status(200).json({
                message: 'Livro atualizado'
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha na atualização`
            })
        }
    }

    static async deleteBook (req,res) {
        try {
            const id = req.params.id
            await book.findByIdAndDelete(id)
            res.status(200).json({
                message: 'livro excluído com sucesso'
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao excluir livro`
            })
        }
    }
}

export default BookController