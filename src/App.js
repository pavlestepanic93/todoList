import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
import {v4 as uuid} from "uuid"; 
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }


  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(ele =>{
      if(ele.id === id){
        ele.completed = !ele.completed
      }
      return ele;
    })});
  }

  //Delete
delToDo = (id) => {
  this.setState({todos: [...this.state.todos.filter(t => t.id !== id)]});
}

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <Router>
      <div className = "App">
        <div className="container">
        <Header/>
        <Route exact path="/" render={props =>(
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos prop1={this.state.todos} 
                  markComplete={this.markComplete}
                  delToDo={this.delToDo}/>
          </React.Fragment>
        )} />
        <Route exact path="/about" component={About}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;