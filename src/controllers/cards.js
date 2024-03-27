import { CardModel } from '../models/local-file-system/card.js' // -> LOCAL
// import { CardModel } from '../models/mongodb/card.js' // -> MONGODB

export class CardsController {
  static async getAll (req, res) {
    const { TypeCard, minPrice, maxPrice, offer, sortOrder } = req.query
    const cards = await CardModel.getAll({ TypeCard, minPrice, maxPrice, offer, sortOrder })

    res.json(cards)
  }
}
