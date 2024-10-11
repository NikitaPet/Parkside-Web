import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import environment from '@/global/config/environment'
const { API_URL } = environment

const headers = { 'Content-type': 'application/json' }
const appealsTag = { type: 'APPEALS', id: 'LIST' }

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['APPEALS'],
    endpoints: (builder) => ({
        getAllAppeals: builder.query({
            query: () => ({ url: '/appeals', headers }),
            providesTags: (result) => getTags(result?.data),
        }),
    }),
})
export default api

export const { reducerPath, reducer, middleware, endpoints } = api
export const { useGetAllAppealsQuery } = api
export const { getAllAppeals } = endpoints

const getTags = (data = []) => {
    return [
        ...data.map(({ data }) => {
            return { type: appealsTag.type, id: JSON.stringify(data) }
        }),
        appealsTag,
    ]
}
