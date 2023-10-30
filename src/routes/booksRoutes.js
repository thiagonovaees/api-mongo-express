import express from 'express'
import BookController from '../controllers/bookController.js'

const routes = express.Router()

routes.get('/books', BookController.getBookList)
routes.get('/books/search', BookController.getBooksByPublisher)
routes.get('/books/:id', BookController.getBooksById)
routes.post('/books', BookController.addNewBook)
routes.put('/books/:id', BookController.updateBook)
routes.delete('/books/:id', BookController.deleteBook)

export default routes