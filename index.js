require('dotenv').config({path: './.env', override: true});

const mongoose = require('mongoose');
const Cat = mongoose.model('Cat', { 
    name: { type: String, require: true },
    age: { type: Number, require: false, default: 0 },
    place: { type: String, require: true },
    id: { type: Number, require: true }
});

const express = require('express');
const app = express();

app.use(express.json());
app.listen(3000, () => console.log('Listening on port 3000...'));

app.get('/api/v1/volume/:pair/:timeframe', (req, res) => {
    const pair = String(req.params.pair);
    const timeframe = String(req.params.timeframe);

    mongoose.connect(process.env.MONGODB_CONN);

    var kitty = new Cat({ name: 'Pirat', place: 'Chaba', id: 3 });
    kitty.save().then(() => console.log('meow'));

    res.sendStatus(200);
    return;
});