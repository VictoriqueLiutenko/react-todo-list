import React from 'react';
import '../TodoList/TodoList.css';

export function Input(props) {
  return (
    <div className='todo-block'>
      <div className='todo-header-block'>
          <h1 className='todo-header header'>To Do List</h1>
      </div>
      <div className='input-block'>
        <input 
          className='input' 
          name='what-to-do' 
          placeholder='Add new' 
          value={props.value} 
          onKeyPress={props.onKeyPress}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

