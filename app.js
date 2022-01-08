const express = require("express");
const router = express.Router();


require('./db.js')


const app = express()
app.use(express.json());
app.use(require('./router/auth.js'))


const PORT = 4000; 


app.get('/' , (req,res) => {
    res.send("dfdf")
})

app.listen(PORT , () => {
    console.log(`server running at http://localhost:${PORT}`)
})

module.exports = router;