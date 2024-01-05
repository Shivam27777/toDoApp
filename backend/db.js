const mongoose = require("mongoose");
require('dotenv').config();

const MongoUrl = process.env.MONGO_DB_URL;

mongoose.connect(MongoUrl)
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports  = {
    todo : todo
}