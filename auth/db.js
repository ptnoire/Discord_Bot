const mongoose = require('mongoose');
const { mongo } = require('../config.json');

const MongoURI = mongo;

const INIT_MONGO = async () => {
    try {
        await mongoose.connect(MongoURI, 
            ({useNewUrlParser: true, useUnifiedTopology: true }));
        console.log('Connected to DB!');
    } catch(err) { console.error(err) };
}

module.exports = INIT_MONGO;