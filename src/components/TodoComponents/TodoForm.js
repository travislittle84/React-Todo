import React from 'react';

function TodoForm(props) {
    return (
        <div>
        <h2>component form below</h2>
        <form onSubmit={props.propSubmitHandler}>
          <input
              name="task" 
              type="text"
              value=""
              placeholder="Type in your task"
              onChange={props.propChangeHandler}
          />
          <button type="submit">Add Todo</button>
          <button>Clear</button>
        </form>
        </div>
    );    
}

export default TodoForm;