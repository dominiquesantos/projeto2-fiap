const app = require('./app');

const port = 3001; // Mudando para 3001
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
