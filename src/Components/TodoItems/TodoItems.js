import React from 'react';
import './TodoItems.css';
import '../TodoList/TodoList.css';

export function TodoItems(props) {
  return <div>
    {props.todoList.map((item, i) => {
      let editable;
      if(item.editable) {
        editable = <input className='editable-item-text' data-key={i} defaultValue={item.text} onKeyPress={props.onEditItem}/>
      } else {
        editable = <div className='item-text' data-key={i} onDoubleClick={props.onDoubleClick}>{item.text}</div>
      }
      return <div key={i} className='item-block'>
        {editable}
        <button className='btn done-btn' data-key={i} onClick={props.toDone}>&#10004;</button>
        <button className='btn delete-btn' data-key={i} onClick={props.toArchive}>&#10006;</button>
        <div className='clear'></div>
      </div>
    })}
  </div>
}