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
        deleteIdol: (state, id) => {
            state.user.idol.splice(id.payload, 1)
        },
        becomeIdol: (state, id) => {
            state.user.idol.push(id.payload)
        },
        setUp: (state, data) => {
            const { name, gender, introduction, avatar } = data.payload
            state.user.name = name
            state.user.gender = parseInt(gender)
            state.user.introduction = introduction
            state.user.avatar = avatar
        },

    },
})

// Action creators are generated for each case reducer function
export const { increment, deleteFavorite, setUp, deleteIdol, becomeIdol } = counterSlice.actions

export default counterSlice.reducer