import express from 'express'
import AuthorController from '../controllers/authorController.js'

const routes = express.Router()

routes.get('/authors', AuthorController.getAuthorList)
routes.get('/authors/:id', AuthorController.getAuthorsById)
routes.post('/authors', AuthorController.addNewAuthor)
routes.put('/authors/:id', AuthorController.updateAuthor)
routes.delete('/authors/:id', AuthorController.deleteAuthor)

export default routes