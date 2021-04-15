import React from 'react'
import { useParams } from 'react-router-dom'
import CityContainer from 'containers/CityContainer'

export default function CityPage() {
    const { cityId } = useParams()

    return <CityContainer cityId={Number(cityId)} />
}
