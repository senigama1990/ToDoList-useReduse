import React from 'react'

function Deletetodo({todo, dispatch}) {
    return (
        <>
            <button onClick={()=> dispatch({type: 'DELETE_TODO', payload: todo.id})}>X</button>
        </>
    )
}

export default Deletetodo
