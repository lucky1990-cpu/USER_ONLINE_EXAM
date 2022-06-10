const mongoose =  require('mongoose')
const validator = require('validator')
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true, 
    useUnifiedTopology: true
},(error,result)=>{

    if(error){
      console.log('Unable to connect DB');
    }
    else{
        console.log('Connection successfully !!!')
    }

})