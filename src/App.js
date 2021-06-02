import React, {useReducer, useState} from 'react'
import ToDo from './components/Todo'



const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [action.payload, ...state]
        case 'TOGGLE_TODO':
            return state.map((t)=> {
                if (t.id === action.payload) {
                    return {...t, completed: !t.completed}
                }
                return t
            })
        case "DELETE_TODO":
            return state.filter((t) => {
                return t.id !== action.payload
            })
        default:
            return state
    }
    
}

function App() {
    const [todoes, dispatch] = useReducer(reducer, [
        { id: 1, text: 'do something', completed: false },
        { id: 2, text: "go to school", completed: false }
    ])
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = { id: Date.now(), text, completed: false }
        dispatch({ type: 'ADD_TODO', payload: newTodo })
        setText('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                
                <input type="text" value={text} onChange = {(e)=> setText(e.target.value)} />
                <button>Add</button>
            </form>
            <ul>
                {todoes.map((eachTodo) => {
                    return <ToDo key={eachTodo.id} todo={eachTodo} dispatch={ dispatch}/>
                })}
            </ul>
        </div>
    )
}

export default App













// import './App.css';
// import { useReducer } from 'react';


// // !TODO useReduceda counter
// // const reducer = (state, action) => {
// //     switch (action.type) {
// //         case "increment":
// //             return ++state;
// //         case 'decrement':
// //             return state - 1
// //     default:
// //         return state
// //     }

// // }

// function App() {
//     // !TODO useReduceda counter
//     // const [counter, dispatch] = useReducer(reducer, 0)
//     // return (
//     //     <div className="App">
//     //         <h1>{counter}</h1>
//     //         <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//     //         <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//     //     </div>
//     // );

// }

// export default App;
