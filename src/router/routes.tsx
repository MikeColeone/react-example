import TodoList from '../examples/todoList';
import Countdown from '../examples/countdown';
import React from 'react';
import CanvasTable from '../examples/canvasTable/index'
const routes = [
  {
    path: '/todoList',
    name: '待办',
    element: <TodoList />,
  },
   {
    path: '/countdown',
    name: '倒计时',
    element: <Countdown initialSeconds={10} />,
  },
  {
    path:'/tableCanvas',
    name:'表格优化',
    element:<CanvasTable/>
  }
];


export default routes;
