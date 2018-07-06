const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean0705', { useNewUrlParser: true })
.catch(error => console.log('Cannot connect database', error));

const wordSchema = new mongoose.Schema({
    en: { type: String, required: true, trim: true, unique: true },
    vn: { type: String, required: true, trim: true },
    isMemorized: { type: Boolean, required: true, default: false },
});

const Word = mongoose.model('Word', wordSchema);

module.exports = { Word };
