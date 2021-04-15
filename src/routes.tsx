import React from 'react'
import { Navigate, PartialRouteObject } from 'react-router'
import SearchPage from './pages/SearchPage'
import CityPage from './pages/CityPage'
import PagesLayout from './containers/PagesLayout'

export const mainPath = 'weather'

export const routes: PartialRouteObject[] = [
    {
        path: '/',
        element: <Navigate to={mainPath} />,
    },

    {
        path: `${mainPath}/*`,
        element: <PagesLayout />,
        children: [
            {
                path: '/',
                element: <SearchPage />,
            },
            {
                path: ':cityId',
                element: <CityPage />,
            },
        ],
    },
]
