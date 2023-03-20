import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { destroy, toggle } from '../redux/todos/todoSlice';



const TodoList = () => {

    const data = useSelector((state) => state.todos.items),
        activeFilter = useSelector((state) => state.todos.activeFilter),
        dispatch = useDispatch(),

        handleDestroy = (todo) => {
            if (window.confirm("Are You Sure ?"))
                dispatch(destroy(todo.id))
        }

    let filtered = data;
    if (activeFilter !== "all") {
        filtered = data.filter(todo =>
            activeFilter === "active"
                ? todo.completed === false
                : todo.completed === true
        );
    }

    return (
        <ul className="todo-list">
            {
                filtered.map(todo => (
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