const mongoose= require('mongoose')



const connectDB = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MDB_URL, {
        useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }).then((data)=>{
        console.log(`MongoDB is connected with server: ${data.connection.host}`)
    })
}

module.exports=connectDB