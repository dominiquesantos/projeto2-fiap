const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Carregar variáveis de ambiente
dotenv.config();

// Conectar ao MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Rotas
const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes);

module.exports = app;
