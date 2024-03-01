// import { readJSON } from '../../utils.js'

async function inventory () {
  return fetch('http://localhost:5000/api') // -> Path de la APi de Inventario
    .then(res => res.json())
}

export class CardModel {
  static async getAll ({ TypeCard, minPrice, maxPrice, sale, sortOrder }) {
    let cards = await inventory()
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
        (!TypeCard || card.TypeCard.toLowerCase() === TypeCard.toLowerCase()) &&
        (!minPrice || card.price >= minPrice) &&
        (!maxPrice || card.price <= maxPrice) &&
        (!sale || card.sale === sale)
      )
    })

    return cards
  }
}
