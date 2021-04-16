import React from 'react'
import { useParams } from 'react-router-dom'
import CityContainer from 'containers/CityContainer'

const CityPage: React.FC = () => {
    const { cityId } = useParams()

    return <CityContainer cityId={Number(cityId)} />
}
export default CityPage
