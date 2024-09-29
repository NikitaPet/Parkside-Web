import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'data',
    initialState: { list: [] },
    reducers: {
        setData: (state, { payload }) => {
            state.list = payload
        },
    },
})
export default slice

export const { actions, reducer } = slice
export const { setData } = actions
