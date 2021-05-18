import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'userMessage',
    initialState: {
        user: null,
    },
    reducers: {
        increment: (state, data) => {
            state.user = data
        },
        decrement: (state) => {
            state.user = { name: 'swk' }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer