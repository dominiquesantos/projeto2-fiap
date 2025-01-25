// src/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/meuprojeto', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao banco de dados!');
  } catch (err) {
    console.error('Erro de conexão com o banco', err);
    process.exit(1);
  }
};

module.exports = connectDB;

