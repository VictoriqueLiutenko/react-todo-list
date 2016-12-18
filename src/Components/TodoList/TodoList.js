import React, { Component } from 'react';
import './TodoList.css';
import { Input } from '../TodoItems/Input';
import { TodoItems } from '../TodoItems/TodoItems';
import { DoneItems } from '../DoneItems/DoneItems';
import { ArchivedItems } from '../ArchivedItems/ArchivedItems';

class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      todoList: [],
      archivedList: [],
      doneList: [],
      inputValue: ''
    };
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDoubleClick = this.onDoubleClick.bind(this);
    this.onEditItem = this.onEditItem.bind(this);
    this.toArchive = this.toArchive.bind(this);
    this.toDone = this.toDone.bind(this);
  } 

  onKeyPress(e) {
    if (e.key === 'Enter' && this.state.inputValue !== '') {
      this.setState({
        todoList: this.state.todoList.concat([{
          text: this.state.inputValue,
          editable: false
        }]),
        inputValue: ''
      });
    }
  } 

  onEditItem(e) {
    console.log(e.key);
    if (e.key === 'Enter' && e.target.value !== '') {
      let newTodoList = JSON.parse(JSON.stringify(this.state.todoList));
      newTodoList[e.target.getAttribute('data-key')].text = e.target.value;
      newTodoList[e.target.getAttribute('data-key')].editable = false;
      this.setState({todoList: newTodoList});
    }
  }

  onChange(e) {
    this.setState({inputValue: e.target.value})
  }  

  onDoubleClick(e) {
    let newTodoList = JSON.parse(JSON.stringify(this.state.todoList));
    newTodoList[e.target.getAttribute('data-key')].editable = true;
    this.setState({todoList: newTodoList});
  }

  toArchive(e) {
    let newTodoList = JSON.parse(JSON.stringify(this.state.todoList));
    this.setState({
      archivedList: this.state.archivedList.concat([{
        text: newTodoList[e.target.getAttribute('data-key')].text,
        editable: false
      }])
    });
    newTodoList.splice(e.target.getAttribute('data-key'), 1);
    this.setState({todoList: newTodoList});
  }

  toDone(e) {
    let newTodoList = JSON.parse(JSON.stringify(this.state.todoList));
    this.setState({
      doneList: this.state.doneList.concat([{
        text: newTodoList[e.target.getAttribute('data-key')].text,
        editable: false
      }])
    });
    newTodoList.splice(e.target.getAttribute('data-key'), 1);
    this.setState({todoList: newTodoList});
  }

  render() {
    return (
      <div className='todo-all'>
        <div className='table-todo'>
          <Input value={this.state.inputValue} onKeyPress={this.onKeyPress} onChange={this.onChange} />
          <TodoItems todoList={this.state.todoList} onEditItem={this.onEditItem} onDoubleClick={this.onDoubleClick} toDone={this.toDone} toArchive={this.toArchive} />
        </div>
        <div className='table-done'>
          <DoneItems doneList={this.state.doneList} />
        </div>
        <div className='table-archived'>
          <ArchivedItems archivedList={this.state.archivedList} />
        </div>
      </div>
    );
  }
}

export default TodoList;