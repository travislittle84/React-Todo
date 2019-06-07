import React from 'react';
import ReactDOM from 'react';

import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      allTasks: []      
    };
  }
  ignorethisfunction = event => {
    
  };

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
    console.log("new todo:", this.state.allTasks)
  };

  /** Toogle Todo Task Item */
  toggleItem = id => {
    console.log('yo')
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

  // toggleTask = id => {
  //   const newList = this.state.allTasks.map(task => {
  //     if (task.id === id) {
  //       const newObj = {
  //         ...item,
  //         completed: !task.completed
  //       };
  //       return newObj;
  //     } else {
  //       return task;
  //     }
  //     }
  //   })
  // };

  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
        </div>
      <div>
        <TodoList allTasks={this.state.allTasks} toggleItem={this.toggleItem}/>
      </div>        
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
