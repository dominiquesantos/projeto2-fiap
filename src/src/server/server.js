const express = require('express');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware para análise do corpo das requisições
app.use(express.json());

// Conexão com o banco de dados
connectDB();

// Usando as rotas de posts
app.use('/api', postRoutes);

// Iniciando o servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

