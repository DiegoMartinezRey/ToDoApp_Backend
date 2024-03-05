const mongoose = require('mongoose')
const schema = mongoose.Schema;

const PostSchema = new schema(
    {
        title: { type:'String', require: true},
        description: { type:'String', require: true},
        author: { type:'String', require: true}    
    }
);

const Post = mongoose.model('post', PostSchema)

module.exports = {
    Post
};