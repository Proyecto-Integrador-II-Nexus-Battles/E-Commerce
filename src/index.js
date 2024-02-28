const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const userRoutes = require('./routes/user.js')

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/api', userRoutes);

//rutas
app.get('/', (req, res) => {
    res.send('API de vitrina de productos')
});

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a MONGODB'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));