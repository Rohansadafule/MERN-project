import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import TransactionApi from './routes/Transactionsapi.js'
import connect from './database/mongodb.js'

const PORT = 4000
const app = express()

app.use(cors());
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello server')
});

app.use('/transaction',TransactionApi)

await connect();

app.listen(PORT, () => {
    console.log('Server is running at port 4000')
})