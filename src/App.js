import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import "./components/TodoComponents/Todo.css"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allTasks: [{
        task: "Get food",
        id: 1,
        completed: false
      }]      
    };
  }
  ignorethisfunction = event => {
    
  }; // Strange VS Code error

  /*** Add Todo Task */
  addTodo = newTodo => {
    const newTodoItem = {
      task: newTodo,
      id: Date.now(),
      completed: false
    };
    
    this.setState({
      allTasks: [...this.state.allTasks, newTodoItem]
    });
  };

  /** Toogle Todo Task Item */
  toggleItem = id => {
    const newList = this.state.allTasks.map(task => {
      if (task.id === id) {
        const newObj = {
          ...task,
          completed: !task.completed
        };
        return newObj;
      } else {
        return task;
      }
    });

    this.setState({ allTasks: newList });
  };

  /* Remove an item */
  removeItem = id => {
    const newList = this.state.allTasks.filter(task => task.id !== id);   
    this.setState({allTasks: newList})
  };


  /* Clear completed */
  clearCompleted = () => {
    const notCompletedList = this.state.allTasks.filter(task => task.completed === false);
    this.setState({allTasks: notCompletedList});
  };

  render() {
    return (
      <div className="App">
        <div className="list-title">
          <h1>Todo List <i class="fas fa-check"></i></h1>
        </div>
        <div className="task-form">       
          <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        </div>
          <TodoList allTasks={this.state.allTasks} toggleItem={this.toggleItem} removeItem={this.removeItem}/>
      </div>
    );
  }
};

export default App;
