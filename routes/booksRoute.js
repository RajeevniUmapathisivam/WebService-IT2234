const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const CommonService = require('../service/commonService')


//2
router.get('/:genre', async (req, res)=>{
    try{
        const genre = req.params.genre;
        const result = await Book.find({genre:genre});
        res.status(200).json(result);

    }catch(error){
            res.status(500).send('Error :' +error);
    }
})

//using the common function
router.get('/common/:genre', async (req, res)=>{
    try{
        const genre = req.params.genre;
        const result = await CommonService.getFiltered(Book, 'genre', genre);
        res.status(200).json(result);

    }catch(error){
            res.status(500).send('Error :' +error);
    }
})



module.exports=router;