import React from 'react';
import { Outlet } from 'react-router-dom';

function Event() {
  return (
    <div style={{ textAlign: 'center', fontSize: '50px' }}>
      <div>오늘의 이벤트</div>
      <Outlet></Outlet>
    </div>
  );
}

export default Event;
