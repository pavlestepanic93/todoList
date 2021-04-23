import React, {Component} from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

export class Todos extends Component {


  render() {
      return this.props.prop1.map((el) =>(
        <Todoitem key={el.id}  prop2={el} markComplete={this.props.markComplete} delToDo = {this.props.delToDo}/>
      ))
  }
}

//PropTypes
Todos.propTypes = {
  prop1: PropTypes.array.isRequired
}

export default Todos;