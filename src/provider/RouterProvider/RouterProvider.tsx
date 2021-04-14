import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { PartialRouteObject } from 'react-router'

type PropsType = {
    routes: PartialRouteObject[]
    children?: React.ReactNode
}

export default function RouterProvider({ children, routes }: PropsType) {
    const routing = useRoutes(routes)

    return (
        <Suspense fallback="loading">
            {routing}
        </Suspense>
    )
}
