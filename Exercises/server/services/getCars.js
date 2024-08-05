const mongoose = require('mongoose');
const Car = require('./models/Car');

const url = 'mongodb+srv://simonaognanova05:hSveutLkOPY3w73A@react-task.hujfarb.mongodb.net/?retryWrites=true&w=majority&appName=react-task';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};


module.exports = async function getCars(){
    await mongoose.connect(url, connectionParams);

    try{
        const car = (await Car.find({})).map(x => x.toJSON());

        return car;
    }catch(e){
        throw e;
    }
}