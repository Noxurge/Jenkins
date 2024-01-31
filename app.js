const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, 'public')));


/*
app.use('/private', (req, res, next) => {
    // Adicione sua lógica de autenticação ou autorização aqui
    // Neste exemplo, bloqueamos o acesso direto à pasta 'private'
    return res.status(403).send('Acesso proibido');
});*/

app.use('/private', express.static(path.join(__dirname, 'private')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

