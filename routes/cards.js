import { Router } from 'express'
import { CardsController } from '../controllers/cards.js'

export const cardsRouter = Router()

cardsRouter.get('/', CardsController.getAll)
