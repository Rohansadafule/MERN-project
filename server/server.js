import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 4000
const app = express()

app.use(cors);

await mongoose.connect("mongodb+srv://rohansadafule:Newmernproject@cluster0.jomtob9.mongodb.net/?retryWrites=true&w=majority")
    console.log('MongoDB connection is succcessful.')

app.get('/', (req, res) => {
    res.send('Hello server')
});

app.listen(PORT, () => {
    console.log('Server is running at port 4000')
})