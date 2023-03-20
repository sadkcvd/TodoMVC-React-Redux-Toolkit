import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { destroy, toggle } from '../redux/todos/todoSlice';

const TodoList = () => {

    const data = useSelector((state) => state.todos.items),
        dispatch = useDispatch();


    return (
        <ul className="todo-list">
            {
                data.map(todo => (
                    <li key={todo.id} className={todo.completed === true ? "completed" : ""}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => dispatch(toggle(todo.id))}
                            />
                            <label>{todo.title}</label>
                            <button className="destroy" onClick={() => dispatch(destroy(todo.id))}></button>
                        </div>
                    </li>
                ))
            }
        </ul >
    )
}

export default TodoList