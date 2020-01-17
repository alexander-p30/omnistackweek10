const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://estevan:dbpassword@cluster0-cvcev.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

// get, post, put, delete

//Tipos de parâmetros
// Query Params: request.query (req.query) (Filtros, ordenação, paginação, etc...)
// Route Params: request.params (req.params) (Identificar um recurso para alteração ou remoção.)
// Body: request.body (req.body) (Dados para criação ou alteração de registro)

//MongoDB (Não-relacional)

app.listen(3333);

