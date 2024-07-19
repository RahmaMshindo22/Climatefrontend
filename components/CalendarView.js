import React from 'react';
import './CalendarView.css';

const CalendarView = () => {
  // Example: Generate dates for the current month
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  const daysArray = [];
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }
  
  const renderCalendarDays = () => {
    const days = [];
    let day = 1;
  
    for (let i = 0; i < 6; i++) {
      const week = [];
  
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(<td key={j}></td>);
        } else if (day > daysInMonth) {
          break;
        } else {
          week.push(<td key={day}>{day}</td>);
          day++;
        }
      }
  
      days.push(<tr key={i}>{week}</tr>);
    }
  
    return days;
  };
  
  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th colSpan="7">{currentDate.toLocaleString('default', { month: 'long' })} {year}</th>
          </tr>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {renderCalendarDays()}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarView;
