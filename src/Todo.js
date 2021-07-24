import React from 'react'
import { observer } from 'mobx-react-lite'
import todo from './store/todo'

function Todo() {
  return (
    <div>
      <button type='button' onClick={() => todo.fetchTodos()}>
        Get todos
      </button>
      <ul className='list'>
        {todo.todos.map(todoItem => (
          <li className='list__item' key={todoItem.id}>
            <label>
              <input
                type='checkbox'
                checked={todoItem.completed}
                onChange={() => todo.completeTodo(todoItem)}
              />
              {todoItem.title}
            </label>
            <button
              className='list__btn'
              type='button'
              onClick={() => todo.removeTodo(todoItem.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default observer(Todo)
