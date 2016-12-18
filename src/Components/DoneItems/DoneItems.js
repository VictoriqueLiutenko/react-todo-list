import React from 'react';
import './DoneItems.css';
import '../TodoList/TodoList.css';

export function DoneItems(props) {
  return <div>
		<div className='done-header-block'>
      <div className='header-block'>
          <h1 className='done-header header'>Done</h1>
      </div>
  	</div>
    {props.doneList.map((item, i) => 
      <div key={i} className='done-item-block'>
    		<div className='item-block'>
	      	<div className='item-text'> {item.text} </div>
    			<div className='clear'></div>
    		</div>
  		</div>
    )}
  </div>
}
