import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: ""
        };
    }

    thisisherebecauseofwierdvscodeproblem = event => {
    }

    changeHandler = event => {
        this.setState({ todoItem: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todoItem);
        this.setState({todoItem: ""})
    };

    clearButtonHandler = event => {
        event.preventDefault();
        this.props.clearCompleted();
    };

    render() {
        return (
            <div>
                <h2>Get Stuff Done</h2>
                <form onSubmit={this.submitHandler}>
                <input 
                    type="text"
                    value={this.state.todoItem}
                    placeholder="Type in your task"
                    onChange={this.changeHandler}
                />
                <button type="submit">Add Todo</button>
                <button id="clear-completed" onClick={this.clearButtonHandler}>Clear Completed</button>
                </form>
            </div>
        );
    }
        
}

export default TodoForm;