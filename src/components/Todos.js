import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    constructor(props){
        super();
    }




        render() {
           
          return (this.props.ptodos.map((item, i)=>{
            return(    
                <TodoItem key={i} item={item} markComplete={this.props.markComplete} delItem={this.props.delItem} addTodo={this.props.addTodo}/>               
            )
        })         
      );
    }
  }

  //PropTypes
  Todos.propType = {
    ptodos: PropTypes.array.isRequired
  }

export default Todos;