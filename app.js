import express, { json } from 'express'
import { cardsRouter } from './routes/cards.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(json())
app.disable('x-powered-by') // Deshabilitar el header x-powered-by

app.use('/cards', cardsRouter) // <-- Todos los recursos que sean CARDS se identifcan con /cards

const PORT = process.env.PORT ?? 3000

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a MONGODB'))
.catch((error) => console.error(error));

app.listen(PORT, () => console.log('server listening on port', PORT));