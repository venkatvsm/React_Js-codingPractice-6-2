// Write your code here

import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  render() {
    const {todoList, deleteItem} = this.props
    const {title, id} = todoList
    const onDeleteTodo = () => {
      deleteItem(id)
    }

    return (
      <li className="ItemContainer">
        <p className="title">{title}</p>
        <button type="button" className="btnEl" onClick={onDeleteTodo}>
          Delete
        </button>
      </li>
    )
  }
}
export default TodoItem
