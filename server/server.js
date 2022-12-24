import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 4000
const app = express()

app.use(cors());
app.use(bodyParser.json())

await mongoose.connect("mongodb+srv://rohansadafule:Newmernproject@cluster0.jomtob9.mongodb.net/?retryWrites=true&w=majority")
    console.log('MongoDB connection is succcessful.')

app.get('/', (req, res) => {
    res.send('Hello server')
});

app.post('/transaction',(req,res)=>{
    res.json({message:'New post request'});
    const {amount,description,date}=req.body;
})

app.listen(PORT, () => {
    console.log('Server is running at port 4000')
})