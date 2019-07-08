import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => {
        if (e.key === 'Enter') {
            this.props.addTodo(e.target.value);
          }
    } 
    render() {
        return (
            <div>
                <input
                onKeyDown={this.onChange} 
                type='text' 
                name='title' 
                placeholder='Write list item...'
                />
               
            </div>
        )
    }
}

export default AddTodo;
