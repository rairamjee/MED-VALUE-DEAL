const mongoose =require('mongoose')

// const connectionString = 'mongodb+srv://Ramjee:Ramjee6625472@medvalue.hq0nhoj.mongodb.net/?retryWrites=true&w=majority&appName=MedValue'

const ConnectDB =(url)=>{
   return mongoose.connect(url)
}

module.exports = ConnectDB