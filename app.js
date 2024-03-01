import express, { json } from 'express'
import { cardsRouter } from './src/routes/cards.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(json())
app.disable('x-powered-by') // Deshabilitar el header x-powered-by

app.use('/cards', cardsRouter) // <-- Todos los recuross que sean CARDS se identifcan con /cards

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listen on port http://localhost:${PORT}`)
})
