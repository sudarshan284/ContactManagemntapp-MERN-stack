const mongoose = require('mongoose');
const connectDb = async () => {
    try{
        const connect = await mongoose.connect('mongodb+srv://sudarshanthakur512:E8llS0QUN93XI40M@sudarshancluster.b1bjvwx.mongodb.net/mycontacts-backend?retryWrites=true&w=majority');
        console.log("Database connected " , connect.connection.host , connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1);
  }

};

module.exports = connectDb ;