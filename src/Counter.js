import React from 'react'
import { observer } from 'mobx-react-lite'
import counter from './store/counter'

function Counter() {
  return (
    <div className='counter'>
      <p className='counter__state'>{counter.total}</p>
      <div className='btns'>
        <button onClick={() => counter.increment()} className='btn'>
          +
        </button>
        <button onClick={() => counter.decrement()} className='btn'>
          -
        </button>
      </div>
    </div>
  )
}

export default observer(Counter)
