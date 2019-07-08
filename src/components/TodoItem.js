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
    const {label} = this.props.item;
        return (
            <div style={this.getStyle()}>  
                <li className="list-group-item listGroupItem">
                    <span>
                        <i 
                            className="fa fa-trash" 
                            onClick={this.props.delItem.bind(this, this.props.item)}>
                        </i>
                    </span>
                    {'  '}    
                    {label}
                                           
                    
                </li>
            </div>
        )
    }
}



//PropTypes
TodoItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default TodoItem;



