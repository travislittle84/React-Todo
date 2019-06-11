// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

// import TodoItem from './TodoItem';
import Todo from './Todo';
import RemoveItemButton from './RemoveItemButton';

function TodoList(props) {
        
    return (
    <div className="task-list">
        {props.allTasks.map(task => {
            return (
                <div className="task-item">
                    <Todo item={task} key={task.id} toggleItem={props.toggleItem} removeItem={props.removeItem}/>
                    <RemoveItemButton id={task.id} removeItem={props.removeItem} />
                </div>
            );
        })}
    </div>
);
}   

export default TodoList;