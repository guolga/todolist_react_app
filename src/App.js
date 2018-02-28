import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './TodoTable';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date:'', description: '', todos: []}
    this.deleteItem = this.deleteItem.bind(this);          
  }

 
  inputChanged = (event) => {
    this.setState({date: event.target.value});
  }

  inputChanged1 = (event) => {
    this.setState({description: event.target.value});
  }
  
  addTodo = (event) => {
    const newTodo = {date:this.state.date, description:this.state.description, };
  
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  
  deleteItem(index) {
    const todos = this.state.todos.filter((item, itemIndex) => {
      return itemIndex !== index
    })
    this.setState({ todos })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>Simple Todolist</h2>
        </div>
        <form onSubmit={this.addTodo}>
        <fieldset>
        <legend>Add todo:</legend>
        Date:<input type="text" onChange={this.inputChanged} value={this.state.date}/>
        Description:<input type="text" onChange={this.inputChanged1} value={this.state.description}/>
        <input type="submit" value="Add"/><br/>
        </fieldset>
      </form>
    <br/>
   
    <TodoTable todos={this.state.todos}  deleteItem={this. deleteItem}/>           

                 
  </div>    
);
}
}

export default App;
