import React from 'react';
import ReactDOM from 'react';

import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      // allTasks: tasks,
      task: "",
      id: "",
      completed: "" 
    };
  }
  ignorethisfunction = event => {
    
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
  }

  changeHandler = event => {
    console.log(event.target.value)
    console.log(event.target.name)
    this.setState( {[event.target.name]: event.target.value} )
  };

  render() {
    return (
      <div>
      <div>
        <h1>Todo List</h1>
      </div>
      <div>
        <TodoList />
      </div>
        
        <TodoForm propSubmitHandler={this.submitHandler} propChangeHandler={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
