import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { PartialRouteObject } from 'react-router'

type Props = {
    routes: PartialRouteObject[]
}

const RouterProvider: React.FC<Props> = ({ routes }) => {
    const routing = useRoutes(routes)

    return <Suspense fallback="loading">{routing}</Suspense>
}
export default RouterProvider
