const Student = require('../models/Student');
const Book = require('../models/Book');


async function getFiltered(Model, requestedField, reqParam)
{
    try{
        if(requestedField=='genre')
        {

            return result = await Model.find({genre:reqParam});
        }
        else if(requestedField=='year')
        {
            return result = await Model.find({year:reqParam});
        }

        
    }catch(error)
    {
        throw new error;
    }
}



module.exports = {getFiltered};