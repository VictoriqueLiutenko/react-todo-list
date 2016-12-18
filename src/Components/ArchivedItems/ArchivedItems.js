import React from 'react';
import './ArchivedItems.css';
import '../TodoList/TodoList.css';

export function ArchivedItems(props) {
return <div>
	<div className='archived-header-block'>
    <div className='header-block'>
        <h1 className='header archived-header'>Archived</h1>
    </div>
	</div>
  {props.archivedList.map((item, i) => 
    <div key={i} className='archived-item-block'>
  		<div className='item-block'>
      	<div className='item-text'> {item.text} </div>
  			<div className='clear'></div>
  		</div>
		</div>
  )}
</div>
}
