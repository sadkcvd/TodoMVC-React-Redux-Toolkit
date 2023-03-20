import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { destroy, selectFilteredTodos, toggle } from '../redux/todos/todoSlice';



const TodoList = () => {

    const filteredTodos = useSelector(selectFilteredTodos),
        dispatch = useDispatch(),

        handleDestroy = (todo) => {
            if (window.confirm("Are You Sure ?"))
                dispatch(destroy(todo.id))
        }

    return (
        <ul className="todo-list">
            {
                filteredTodos.map(todo => (
                    <li key={todo.id} className={todo.completed === true ? "completed" : ""}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => dispatch(toggle(todo.id))}
                            />
                            <label>{todo.title}</label>
                            <button className="destroy" onClick={() => handleDestroy(todo)}></button>
                        </div>
                    </li>
                ))
            }
        </ul >
    )
}

export default TodoList