import React from 'react';
import './App.css';
import Todos from './components/Todos.js'
import Header from './components/Header.js'
import Addtodo from './components/AddTodo.js'
class App extends React.Component {
  state = {
    todos : [
      {
      id: 1,
      label:'Sacar la basura',
      done: false, 
      },
      {
      id: 2,
      label:'Baniar al perro',
      done: false, 
      },
      {
      id: 3,
      label:'Lavar la ropa',
      done: false, 
      }

    ],
  }


//Add Item Method

addTodo = (title, i) => {
  const newTodo = {
    id: i,
    label: title,
    done: false

  }
  this.setState({todos: [...this.state.todos, newTodo]})
}

//Delete Item Method
delItem = (id) => {
  this.setState({todos: [...this.state.todos.filter(item => item !== id)]});
}





//Mark completed Item
markComplete = (id) => {
  this.setState({todos: this.state.todos.map(item => {
    if(item.id === id){
      item.done = !item.done;
    }
    return item;


  })});
}


  

  render() {
     console.log(this.state.todos)
        return (
          <div className="App">
            <div className='container'>              
              <Header className='todoHeader'/>
              <Addtodo addTodo={this.addTodo} />      
              <ul className="list-group ">
              <Todos ptodos={this.state.todos} markComplete={this.markComplete} delItem={this.delItem}/>
              </ul>
            </div>  
          </div>
    );
  }
}

export default App;
