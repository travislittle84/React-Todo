// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import TodoItem from './TodoItem';

function TodoList(props) {
    console.log("Todo List", props)
    return (
        <div>
            {props.allTasks.map(task => {
                return (
                    <TodoItem item={task} key={task.id} toggleItem={props.toggleItem}/>
                );
            })}
        </div>
    );
};

export default TodoList;