const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Borrrow = require('../models/Borrow');
const Book = require('../models/Book');



router.post('/', async (req, res) =>{

    try{

        const {studentId, bookId} = req.body;

       if(await Student.countDocuments({_id:studentId}) == 0)
       {
        res.status(404).send('Student not available');
       }
       else if(await Book.countDocuments({_id:bookId}) == 0)
       {
        res.status(404).send('Book not available');
       }
       else
       {
            result = await Student.aggregate([
                {
                    $lookup:{
                        from:'borrows',
                        localField:"_id",
                        foreignField:"student",
                        as:"borrows"
                    }
                },
                {
                    $unwind : "$borrows"
                },
                {
                    $match:{
                        'borrows.returned': false
                    }
                },
                {
                    $group:{
                        'borrows.student':studentId,
                        count: {$sum: 1}
                    }
                },
                {
                    $match:{
                        count:{$gt:4}
                    }
                },
                {
                    $project:{
                        _id:1,
                        count:1
                    }
                }
            ]);
            
            console.log(result);
            if(result.length > 0 )
            {
                res.status(500).send('Student has already borrowed 2 books');
            }else
            {
                const r = await Book.find({_id:bookId});
                if(r[0].copiesAvailable <=1)
                    {
                        res.status(500).send('This book cannot be borrows since only one copy of this left');
                    } 
                    else{
                        const result = Borrow.create({student:studentId,book:bookId,returned:false})
            }
       }


    }
    }
    catch(error)
    {
        res.status(500).send("Error: "+error);
    }

})



module.exports = router; 