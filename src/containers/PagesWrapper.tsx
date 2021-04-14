import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from "../components/Layout";

const PagesWrapper: React.FC = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

export default PagesWrapper
