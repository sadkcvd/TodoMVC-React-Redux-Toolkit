import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveFilter, clearCompleted, selectActiveFilter, selectTodos } from '../redux/todos/todoSlice'

const ContentFooter = () => {

    const data = useSelector(selectTodos),
        activeFilter = useSelector(selectActiveFilter),
        dispatch = useDispatch(),
        itemsLeft = data.filter(item => !item.completed).length

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemsLeft} </strong>
                {itemsLeft > 1}
                item{itemsLeft > 1 && "s"} left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className={activeFilter === "all" ? "selected" : ""}
                        onClick={() => dispatch(changeActiveFilter("all"))}
                    >All</a>
                </li>
                <li>
                    <a href="#/" className={activeFilter === "active" ? "selected" : ""}
                        onClick={() => dispatch(changeActiveFilter("active"))}
                    >Active</a>
                </li>
                <li>
                    <a href="#/" className={activeFilter === "completed" ? "selected" : ""}
                        onClick={() => dispatch(changeActiveFilter("completed"))}
                    >Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>
                Clear completed
            </button>
        </footer >
    )
}

export default ContentFooter