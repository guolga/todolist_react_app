import React, { Component } from 'react';
import './App.css';

class TodoTable extends Component {

constructor(props) {
    super(props);       
}   

render() {        

    return (

    <div className="App">
      <table align="center">
        <tbody>
           <tr><th>Date</th><th>Description</th></tr>
    
    {this.props.todos.map((item, index) => <tr><td key={index}>{item.date}</td><td key={index}>{item.description}</td><br/><button onClick={(e) => { this.props.deleteItem(index)}}>Delete</button><br/></tr>)}
     
        </tbody>
       </table> 
     </div>
    );
  }
}

export default TodoTable;