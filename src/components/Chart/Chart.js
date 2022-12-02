import {ChartBar} from './ChartBar';
import './Chart.css'

export const Chart = (props) => {
    const allValues = props.dataPoints.map(datapoint => datapoint.value)
    const maxValue = Math.max(...allValues);
    return (
        <div className='chart'>
        {props.dataPoints.map((datapoint)=>{
            return (
                <ChartBar 
                key = {datapoint.label}
                value = {datapoint.value}
                label = {datapoint.label}
                maxValue = {maxValue}
                />
            );
        })
 
        }
    </div>
    )
}