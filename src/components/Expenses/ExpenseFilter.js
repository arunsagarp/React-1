import './ExpenseFilter.css';
export const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    }
    console.log(props.items);
    const listOfYears = [...new Set(props.items.map((item)=> item.date.getFullYear()))];
    console.log(listOfYears);
    return (
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            {listOfYears.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
};