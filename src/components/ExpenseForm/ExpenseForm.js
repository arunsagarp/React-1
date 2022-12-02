import {useState} from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props) => {
    const [e_name, setName] = useState('');
    const [e_amount, setAmount] = useState('');
    const [e_date, setDate] = useState('');
    const [isForm, changeForm] = useState('False')
    
    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const amountHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateHandler = (event) => {
        setDate(event.target.value)
    }
    const submitHandler = (event) => { 
        event.preventDefault();
        const data = {
            name : e_name,
            amount: Number(e_amount),
            date: new Date(e_date)
        }
        props.onSaveData(data);
        setName('');
        setAmount('');
        setDate('');
        changeForm('False');
    }


    const addExpenseMethod = () =>{
        changeForm('True');
    }
    const onCancelHandler = () =>{
        changeForm('False');
    }
    if(isForm==='False'){
    return (
        <div>
        <button type="button" onClick={addExpenseMethod}>Add expenses</button>
        </div>
    );
    }
    else{
    return (
        <form onSubmit={submitHandler}>
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label>Title</label>
                    <input type="text" value={e_name} onChange={nameHandler}/>
                </div>
                <div className = "new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={e_amount} onChange={amountHandler}/>
                </div>
                <div className = "new-expense__control">
                    <label>Date</label>
                    <input type="date"  value={e_date} onChange={dateHandler}/>
                </div>
            </div>
                
            <div className="new-expense__actions">
            <button type="button" onClick={onCancelHandler}>Cancel</button>
                <button type="submit">Add expenses</button>
            </div>
        </form>
    )
}
}