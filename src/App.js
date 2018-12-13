import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import logo from './image/logo.svg'
import checkAll from './image/check_all.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {title: "Go to shopping", isComplete: true},
        {title: "Go to school"},
        {title: "Go to work"}
      ],
      newItem: ''
    }
  }

  onItemClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  addNewItem(event) {
    let text = event.target.value.trim();

    if (event.keyCode === 13 && text) {
      this.setState({
        todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ], newItem: ''
      });
    }
  }

  onChange(event) {
    this.setState({newItem: event.target.value})
  }

  render() {
    const {todoItems, newItem} = this.state;
    return (
      <div className="App">
        <div className='App-Header'>
          <h1>
            <img src={logo} alt='logo'/>
            todo list
          </h1>
        </div>
        <div className='App-Contents'>
          <div className='App-Form'>
            <img src={checkAll} width='32' height='32' alt='check all'/>
            <input type='text' placeholder='Add a new todo'
              onKeyUp={this.addNewItem.bind(this)}
              value={newItem}
              onChange={this.onChange.bind(this)}
            />
          </div>
            {
              todoItems.length > 0 && todoItems.map((item, key) =>
                <TodoItem
                  key={key}
                  item={item}
                  onClick={this.onItemClick(item)}
                />
              )
            }

            {todoItems.length === 0 && <div className='TodoItem'><p>Need add new todo</p></div>}
        </div>
      </div>
    );
  }
}

export default App;
