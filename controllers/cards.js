import { CardModel } from '../models/local-file-system/card.js'

export class CardsController {
  static async getAll (req, res) {
    const { type, minPrice, maxPrice, sale, sortOrder } = req.query
    const cards = await CardModel.getAll({ type, minPrice, maxPrice, sale, sortOrder })
    res.json(cards)
  }
}
