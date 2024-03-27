// import { readJSON } from '../../utils.js'

async function inventory () {
  try {
    return fetch('http://localhost:1234/inventario/getEcommerceCard') // -> Path de la APi de Inventario
      .then(res => res.json())
  } catch (err) {
    console.log('Failed to connect to server')
    // console.error(err)
  }
}

export class CardModel {
  static async getAll ({ TypeCard, minPrice, maxPrice, sale, sortOrder }) {
    try {
      let cards = await inventory()
      console.log(cards)
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
    } catch (err) {
      console.log('failed to get cards')
      console.error(err)
    }
  }
}
