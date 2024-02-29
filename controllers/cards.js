import card from '../models/card.js';

export class CardsController {
  // static async getAll(req, res) {
  //   const { type, minPrice, maxPrice, sale, sortOrder } = req.query
  //   const cards = await CardModel.getAll({ type, minPrice, maxPrice, sale, sortOrder })
  //   res.json(cards)
  // }

  static async getAll(req, res) {
    card
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

  static async createCard(req, res) {
    const newCard = card(req.body);
    newCard
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };
}