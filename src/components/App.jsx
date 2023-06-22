import DatePicker from "react-multi-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

const weekDays = ["S", "M", "T", "W", "T", "F", "S"]

export const App = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker value={startDate}
      onChange={(date) => setStartDate(date)}
      className="custom-calendar"
      weekStartDayIndex={1}
      arrow={false}
      weekDays={weekDays}
   mapDays={({ date }) => {
    let props = {}
    let isWeekend = [0, 6].includes(date.weekDay.index)
    
    if (isWeekend) props.className = "highlight"
    
    return props
  }}
/>
  );
}
