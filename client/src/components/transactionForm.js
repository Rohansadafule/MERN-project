import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button';
import { useState } from 'react';


const InitialForm = {
    amount: 0,
    description: '',
    date: new Date(),
}



export default function TransactionForm() {
    const [form, setForm] = useState(InitialForm)

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await fetch('http://localhost:4000/transaction', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'content-Type': "application/json"
            }
        });
        if (res.ok) {
            setForm(InitialForm)
            // fetchTransaction()
        }
    }


    return (
        <Card sx={{ minWidth: 275, marginTop: 10 }}>
            <CardContent>
                <Typography variant="h6">
                    Add New Transaction
                </Typography>
                <form onSubmit={handleSubmit}>

                    <TextField sx={{ marginRight: 5 }} id="outlined-basic" name='amount' label="Amount" variant="outlined" size='small' value={form.amount} onChange={handleChange} />
                    <TextField sx={{ marginRight: 5 }} id="outlined-basic" name='description' label="Description" variant="outlined" size='small' value={form.description} onChange={handleChange} />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Transaction Date"
                            value={form.date}
                            inputFormat="MM/DD/YYYY"
                            onChange={handleChange}
                            renderInput={(params) => <TextField sx={{ marginRight: 5 }} size='small' {...params} />}
                        />
                    </LocalizationProvider>
                    <Button type='submit' variant="contained">Submit</Button>

                </form>

            </CardContent>
        </Card>
    );
}