import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/content.html');
});

app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000')
});
