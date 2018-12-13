import React, { Component } from 'react';
import './TodoItem.css'
import checked from '../image/checked.svg'
import unchecked from '../image/unchecked.svg'

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props
    let className = 'TodoItem';
    let url = unchecked;
    if (item.isComplete === true) {
      className += ' TodoItem-complete'
      url = checked
    }

    return (
      <div onClick={onClick} className={className}>
        <img src={url} width='32' height='32' alt='item todo'/>
        <p>{item.title}</p>
      </div>
    )
  }
}

export default TodoItem;
