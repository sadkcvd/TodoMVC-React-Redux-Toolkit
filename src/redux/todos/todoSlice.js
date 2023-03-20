import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [
            {
                id: 1,
                title: "Learn React",
                completed: true
            },
        ],
        activeFilter: "all",
        isLoading: false,
        isError: false
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
        toggle: (state, action) => {
            const id = action.payload
            const item = state.items.find(item => item.id === id)
            item.completed = !item.completed
        },
        destroy: (state, action) => {
            const id = action.payload
            const filtered = state.items.filter(item => item.id !== id)
            state.items = filtered
        },
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload
        },
        clearCompleted: (state, action) => {
            const filtered = state.items.filter(item => item.completed === false)
            state.items = filtered
        }
    }
});


export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;