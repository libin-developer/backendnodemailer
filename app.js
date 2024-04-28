const express =require('express')
const app =new express();
const routes =require('./routes/route')
const cors =require('cors')
const dotenv =require('dotenv')


app.use(express.json());

app.use(cors());

dotenv.config();


app.use('/',routes)

app.listen(process.env.PORT, ()=>{
    console.log('server running succesfully'+process.env.PORT)
})