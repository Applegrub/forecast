import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import RouterProvider from 'providers/RouterProvider/RouterProvider'
import { routes } from './routes'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <RouterProvider routes={routes} />
            </QueryClientProvider>
        </BrowserRouter>
    )
}

export default App
