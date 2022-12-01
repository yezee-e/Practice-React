import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function DayList() {
  const days = useFetch('http://localhost:3004/days');

  if (days.length === 0) {
    //로딩이 느릴경우(network에 slow3G로 확인해볼수있다)
    return <span>Loading...</span>;
  }

  return (
    <ul className='list_day'>
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DayList;
