import React, { Component } from 'react';
import './TodoFooter.css'


class TodoFooter extends Component {
  render() {
    let className = 'TodoFooter';
    let itemLeft = '2 items left';
    const labels = ['All', 'Active', 'Completed']
    const buttonList = labels.map((button,index) => <button className={button} type="" key={index} >{button}</button>);

    return (
      <div className={className}>
        <div className="TodoFooter-Left">
        {itemLeft}
        </div>
        <div className="TodoFooter-Right">
        {buttonList}
        </div>
      </div>
    )
  }
}

export default TodoFooter;
