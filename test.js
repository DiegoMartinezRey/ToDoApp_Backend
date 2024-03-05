const mongoose = require('mongoose');
const Post = require('./post');

async function main(){
    await mongoose.connect(
        "mongodb+srv://Dieguein:BhKqobNPA4tvsAvr@diego.wmp7dvz.mongodb.net/?retryWrites=true&w=majority"
    );

    // const post = await Post.find('').populate('author')

    // console.log(post)
}

//main();