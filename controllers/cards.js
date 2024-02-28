import { CardModel } from '../models/local-file-system/card.js'

export class CardsController {
  static async getAll (req, res) {
    const { type, minPrice, sale } = req.query
    const cards = await CardModel.getAll({ type, minPrice, sale })
    res.json(cards)
  }
}
