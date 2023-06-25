import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar, CalendarButton, CalendarHeader, NameOfDay, Period } from './Calendar.styled';


const SmallCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <CalendarButton className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </CalendarButton >
  ));

  const CustomContainer = ({ children }) => (
    <Calendar>
      {children}
    </Calendar>
  );

  const CustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
  
    return (
      <CalendarHeader >
        <button onClick={decreaseMonth}>{'<'}</button>
        <Period>
          {month} {year}
        </Period>
        <button onClick={increaseMonth}>{'>'}</button>
      </CalendarHeader >
    );
  };
  
  const CustomDaysOfWeek = (day) => {

    return (
      <NameOfDay>
        {day.substr(0,1)}
      </NameOfDay>
    );
  };


  return (
    <DatePicker selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<CustomInput />}
      dateFormat="d MMM yyyy"
      calendarStartDay={1}
      formatWeekDay={CustomDaysOfWeek}
      fixedHeight
      calendarContainer={CustomContainer}
      renderCustomHeader={CustomHeader}
      
/>
  );
}

export default SmallCalendar;
