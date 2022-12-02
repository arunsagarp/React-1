import {useState} from 'react';

import {ExpenseItem} from "./ExpenseItem";
import {ExpenseFilter} from './ExpenseFilter';
import { ExpenseChartForm } from './ExpenseChart';
import { Card } from "../UI/Card";
import './Expense.css'
export const Expense = (props) => {
  const [filteredYear, setYear] = useState('2022')
  const filterChangeHandler = selectedYear => {
    setYear(selectedYear);
  }
  const filteredItems = props.items.filter(item => item.date.toString().includes(filteredYear))
  console.log(filteredItems);
    return (
      <div>
        <Card className='expense'>
          <ExpenseFilter selected={filteredYear} items= {props.items} onChangeFilter={filterChangeHandler} />
          <ExpenseChartForm expenses={filteredItems}/>
          {filteredItems.map(
            (e) => (
            <ExpenseItem 
              key={e.id}
              name={e.name}
              amount={e.amount}
              date={e.date}
            />
          
          ))}
        </Card>
    </div>
      );
}