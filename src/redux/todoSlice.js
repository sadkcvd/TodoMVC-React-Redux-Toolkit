
import { createSlice } from 'redux/toolkit'

const initialState = {
    todos: [],
    isLoading: false,
    isError: false
}

export const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {

    },
    // extraReducers: (builder) => {
    //     builder

    // }

})