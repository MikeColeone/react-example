import React from 'react';
import Countdown from './examples/countdown.tsx';
import TodoList from './examples/todoList.tsx';

function App() {
  return (
    <>
        <div>
        <Countdown initialSeconds={10} />
        </div>
        <div>
            <TodoList/>
        </div>
    </>
  );
}

export default App;
