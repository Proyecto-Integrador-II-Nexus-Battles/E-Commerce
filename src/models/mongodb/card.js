import mongoose, { model, Schema } from 'mongoose'
const uri = 'mongodb+srv://user:????@cluster0.4jaifwg.mongodb.net/dbPrueba?retryWrites=true&w=majority&appName=Cluster0'

// mongodb connection
mongoose.connect(uri)
  .then(() => console.log('Conectado a MONGODB'))
  .catch((error) => console.error(error))

const cardSchema = new Schema({})

const Card = model('cards', cardSchema) // -> Sin schema, son muchos atributos divididos

export class CardModel {
  static async getAll ({ TypeCard }) {
    if (TypeCard) { // -> Filtrado
      return Card
        .find({ TypeCard: `${TypeCard}` })
        .then(data => {
          return data
        })
    }
    return Card
      .find()
      .then(data => {
        return data
      })
  }
}
