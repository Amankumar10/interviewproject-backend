const mongoose = require("mongoose")


const DB ="mongodb+srv://admin:HaXNPtGMVYlwcaeI@cluster0.ffove.mongodb.net/whatsappdb?retryWrites=true&w=majority"

mongoose.connect(DB,{
    dbName:"interviewDB",
}).then(() => {
    console.log("connect to mongodb successfully")
}).catch((err)=> {
    console.log('not connect')
}  )