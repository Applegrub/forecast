import React from 'react'
import { Navigate, PartialRouteObject } from 'react-router'
import SearchPage from "./pages/SearchPage";
import CityPage from "./pages/CityPage";
import PagesWrapper from "./containers/PagesWrapper";

const mainPath = 'main'
export const routes: PartialRouteObject[] = [
    {
        path: '/',
        element: (
            <Navigate to={mainPath} />
        ),
    },

    {
        path: `${mainPath}/*`,
        element: <PagesWrapper />,
        children: [
            {
            path: '/',
            element: <SearchPage />
            },
            {
                path: ':cityId',
                element: <CityPage />
            },],
    },
]
