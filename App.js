import React from 'react';
import Header from './Header';
import SubmitForm from './SubmitForm';
import TodoList from './TodoList';
import './App.css';
import './index';


class App extends React.Component {
  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  };

  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
  }
  
  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
  }

  render() {
    return(
      <div className='App'>
      <div id='to-do-form'>
        <div className="card frame">
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
      </div>
    );
  } 
}
export default App;