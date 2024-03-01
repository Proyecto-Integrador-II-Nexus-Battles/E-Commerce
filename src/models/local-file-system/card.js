import { readJSON } from '../../utils.js'

export class CardModel {
  static async getAll ({ type, minPrice, maxPrice, sale, sortOrder }) {
    let cards = readJSON('./cards.json')

    if (typeof sale === 'string') {
      sale = sale.toLowerCase() === 'true'
    }
    if (sortOrder === 'asc') {
      cards.sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'desc') {
      cards.sort((a, b) => b.price - a.price)
    }

    cards = cards.filter(card => {
      return (
        (!type || card.type.toLowerCase() === type.toLowerCase()) &&
        (!minPrice || card.price >= minPrice) &&
        (!maxPrice || card.price <= maxPrice) &&
        (!sale || card.sale === sale)
      )
    })

    return cards
  }
}

//
