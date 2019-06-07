import React from 'react';

function Todo(props) {
    
    const clickHandler = () => {
        props.toggleItem(props.item.id);
    };

    return (
        <div className={`task${props.item.completed ? " completed" : ""}`} onClick={clickHandler} >
            <p>{props.item.task}</p>             
        </div>
    );
}
export default Todo;