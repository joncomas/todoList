import React, { Component } from 'react'
import PropTypes from 'prop-types';



export class TodoItem extends Component {

    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            textDecoration: this.props.item.done ?
            'line-through' : 'none',
            borderBottom: '1px #ccc dotted'
        }

    }

    

    render() {
    const {id, label} = this.props.item;
        return (
            <div style={this.getStyle()}>  
                <li className="list-group-item ">
                    <p>
                        <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {' '}
                        {label}
                        <button onClick={this.props.delItem.bind(this, this.props.item)} style={btnStyle}>X</button>
                        
                    </p>
                </li>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    boder: 'none',
    padding: '5px 10px',
    boderRadius: '50%',
    curso: 'pointer',
    float: 'right'
}

//PropTypes
TodoItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default TodoItem;



