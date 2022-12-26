import { useEffect, useState } from 'react';
import * as React from 'react';
import ButtonAppBar from './components/appBar';
import TransactionForm from './components/transactionForm';

const InitialForm = {
  amount: 0,
  description: '',
  date: '',
}

function App() {
  const [form, setForm] = useState(InitialForm)

  const [transaction,setTransation] = useState([])

  useEffect(()=>{
    fetchTransaction()
  },[])

  async function fetchTransaction(){
    const res =await fetch('http://localhost:4000/transaction')
    const {data} = await res.json();
    setTransation(data)
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
      const res = await fetch('http://localhost:4000/transaction',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'content-Type':"application/json"
      }
    });
    if (res.ok){
      setForm(InitialForm)
      fetchTransaction()
    }
  }

  return <div>
    <ButtonAppBar/>
    <TransactionForm/>
    <form onSubmit={handleSubmit}>
      <input type="number" name='amount' value={form.amount} onChange={handleInput} placeholder="Enter transaction amount." />
      <input type="text" name='description' value={form.description} onChange={handleInput} placeholder="Enter Desription." />
      <input type="date" name='date' value={form.date} onChange={handleInput} />
      <button type="submit">Submit</button>
    </form>
    <br/>

    <section>
      <table>
        <thead>
        <th>amount</th>
        <th>description</th>
        <th>date</th>
        </thead>
        <tbody>
          {transaction.map((trx)=>(
            <tr key={trx.__id}>
            <td>{trx.amount}</td>
            <td>{trx.description}</td>
            <td>{trx.date}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </section>
  </div>
}

export default App;
