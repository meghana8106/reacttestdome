import React, {useRef, useEffect} from 'react';

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

const TodoList = ({ items, onListClick, onItemClick }) => {
  const handleItemClick = (item, event) => {
    if (item.done) {
        return; 
      }
    else {
        onItemClick(item, event);
    }
      
  };

  return (
    <ul onClick={onListClick}>
      {items.map((item, index) => 
        <TodoItem item={item} key={index} onClick={(event) => handleItemClick(item, event)}/>)}
    </ul>
  );
}


export default TodoList