import React from 'react'
import Deletetodo from './Deletetodo'

function ToDo(props) {
    const {todo, dispatch} = props
    return (
        <>
            <li style={{
                textDecoration: todo.completed ? "line-through": ''
            }}>
                {todo.text}
                <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>toggle</button>
                <Deletetodo todo={todo} dispatch={ dispatch}/>
            </li>
        </>
    )
}

export default ToDo
