import React from 'react';

function TodoItem(props) {
    
    const clickHandler = () => {
        props.toggleItem(props.item.id);
    };

    return (
        <div onClick={clickHandler}>
            <p>{props.item.task}</p>
        </div>
        
    );
}

export default TodoItem;