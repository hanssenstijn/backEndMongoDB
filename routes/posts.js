const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req,res) => {
    res.send('Posts');
});

// Define route for posting message
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err });
    };
});

module.exports = router;