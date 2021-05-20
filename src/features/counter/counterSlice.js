import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'userMessage',
    initialState: {
        user: null,
    },
    reducers: {
        increment: (state, data) => {
            state.user = data.payload
        },
        deleteFavorite: (state, id) => {
            state.user.favorites.splice(id.payload, 1)
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, deleteFavorite, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer