import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: ""
        };
    }

    changefuckHandler = event => {

    }

    changeHandler = event => {
        this.setState({ todoItem: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todoItem);
    };
    render() {
        return (
            <div>
                <h2>component form below</h2>
                <form onSubmit={this.submitHandler}>
                <input 
                    type="text"
                    value={this.state.todoItem}
                    placeholder="Type in your task"
                    onChange={this.changeHandler}
                />
                <button type="submit">Add Todo</button>
                <button>Clear</button>
                </form>
            </div>
        );
    }
        
}

export default TodoForm;