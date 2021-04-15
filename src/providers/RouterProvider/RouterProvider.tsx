import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { PartialRouteObject } from 'react-router'

type PropsType = {
    routes: PartialRouteObject[]
}

export default function RouterProvider({ routes }: PropsType) {
    const routing = useRoutes(routes)

    return <Suspense fallback="loading">{routing}</Suspense>
}
