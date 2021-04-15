import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from 'components/Layout'

const PagesLayout: React.FC = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

export default PagesLayout
