import TodoList from '../examples/todoList';
import Countdown from '../examples/countdown';
import React from 'react';

const routes = [
  {
    path: '/todoList',
    name: '待办',
    element: <TodoList />,
  },
   {
    path: '/countdown',
    name: '倒计时',
    element: <Countdown initialSeconds={0} />,
  }
];


export default routes;
