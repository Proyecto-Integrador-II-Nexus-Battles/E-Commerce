import { readJSON } from '../../utils.js'

export class CardModel {
  static async getAll ({ type, minPrice, sale }) {
    let cards = readJSON('./cards.json')
    // Aplicar filtros según las condiciones proporcionadas

    if (typeof sale === 'string') {
      sale = sale.toLowerCase() === 'true'
    }

    console.log(typeof sale)
    console.log(type, minPrice, sale)
    cards.forEach(card => {
      console.log(
        'entro',
        !type || card.type.toLowerCase() === type.toLowerCase(),
        !minPrice || card.price >= minPrice,
        !sale || card.sale === sale
      )
    })

    cards = cards.filter(card => {
      return (
        (!type || card.type.toLowerCase() === type.toLowerCase()) &&
        (!minPrice || card.price >= minPrice) &&
        (!sale || card.sale === sale)
      )
    })

    return cards
  }
}
