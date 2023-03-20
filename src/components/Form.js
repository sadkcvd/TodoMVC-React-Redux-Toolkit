import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todos/todoSlice'

const Form = () => {
    const dispatch = useDispatch(),
        [todoTitle, setTodoTitle] = useState(""),

        handleSubmit = (e) => {
            e.preventDefault();
            if (todoTitle === "") {
                return;
            }
            dispatch(addTodo({ id: nanoid(), title: todoTitle, completed: false }))
            setTodoTitle("");
        }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
            />
        </form>
    )
}

export default Form