import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm';
export const NewExpense = (props) => {
    const saveFormData = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.addNewExpense(data);
        
    }
    
    return <div className="new-expense">
        <ExpenseForm onSaveData={saveFormData} />
    </div>
}