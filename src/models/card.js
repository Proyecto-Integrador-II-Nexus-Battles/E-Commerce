import { readJSON } from '../../utils.js'
import mongoose from 'mongoose'

// export class CardModel {
//   static async getAll ({ type, minPrice, maxPrice, sale, sortOrder }) {
//     let cards = readJSON('./cards.json')

//     if (typeof sale === 'string') {
//       sale = sale.toLowerCase() === 'true'
//     }
//     if (sortOrder === 'asc') {
//       cards.sort((a, b) => a.price - b.price)
//     } else if (sortOrder === 'desc') {
//       cards.sort((a, b) => b.price - a.price)
//     }

//     cards = cards.filter(card => {
//       return (
//         (!type || card.type.toLowerCase() === type.toLowerCase()) &&
//         (!minPrice || card.price >= minPrice) &&
//         (!maxPrice || card.price <= maxPrice) &&
//         (!sale || card.sale === sale)
//       )
//     })

//     return cards
//   }
// }

const card = mongoose.Schema({
  nombre: {
      type: String,
      required: true
  },
  poder: {
      type: String,
      required: true
  },
  vida: {
      type: String,
      required: true
  },
  defensa: {
      type: String,
      required: true
  },
  ataque: {
      type: String,
      required: true
  },
  dano: {
      type: String,
      required: true
  },
  imagen: {
      type: String,
      required: true
  }
});

export default mongoose.model('Card', card);