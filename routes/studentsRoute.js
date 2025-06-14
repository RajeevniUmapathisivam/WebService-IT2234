const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const CommonService = require('../service/commonService')



//3
router.get('/:year', async (req, res)=>{
    try{
        const year = req.params.year;
        const result = await Student.find({year:year});
        res.status(200).json(result);

    }catch(error){
            res.status(500).send('Error :' +error);
    }
})

//using the common function
router.get('/common/:year', async (req, res)=>{
    try{
        const year = req.params.year;
        const result = await CommonService.getFiltered(Student, 'year', year);
        res.status(200).json(result);

    }catch(error){
            res.status(500).send('Error :' +error);
    }
})




module.exports=router;