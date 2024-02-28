import express, { json } from 'express'
import { cardsRouter } from './routes/cards.js'

const app = express()
app.use(json())
app.disable('x-powered-by') // Deshabilitar el header x-powered-by

app.use('/cards', cardsRouter) // <-- Todos los recuross que sean CARDS se identifcan con /cards

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listen on port http://localhost:${PORT}`)
})
