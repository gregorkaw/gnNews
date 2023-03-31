import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api_key = import.meta.env.VITE_NEWS_API_KEY

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://newsapi.org"}),
    endpoints: (builder) => ({
        getEverything: builder.query({
            query: (country) => `/v2/top-headlines?country=${country}&pageSize=100&apiKey=${api_key}`,
            
        })
    })
})

export const { useGetEverythingQuery } = newsApi