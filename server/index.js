const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const { Word } = require('./word.model');

const app = express();
app.use(cors());
app.use(json());

app.get('/', (req, res) => res.send({ success: true, message: 'server is running' }));

app.get('/word', async (req, res) => {
    const words = await Word.find({});
    res.send({ success: true, words });
});

app.post('/word', (req, res) => {
    const { en, vn } = req.body;
    const word = new Word({ en, vn });
    word.save()
    .then(() => res.send({ success: true, word }))
    .catch(() => res.send({ success: false, message: 'CANNOT_CREATE_WORD' }));
});

app.delete('/word/:_id', (req, res) => {
    Word.findByIdAndRemove(req.params._id)
    .then(word => {
        if (!word) throw new Error('CANNOT_FIND_WORD');
        res.send({ success: true, word });
    })
    .catch(() => res.send({ success: false, message: 'CANNOT_FIND_WORD' }));
});

app.put('/word/:_id', (req, res) => {
    Word.findByIdAndUpdate(req.params._id, { isMemorized: req.body.isMemorized }, { new: true })
    .then(word => {
        if (!word) throw new Error('CANNOT_FIND_WORD');
        res.send({ success: true, word });
    })
    .catch(() => res.send({ success: false, message: 'CANNOT_FIND_WORD' }));
});

app.listen(3000, () => console.log('Server started!'));
