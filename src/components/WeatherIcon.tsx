import React from 'react'
import { weatherIconApi } from 'services/ApiService/const'

type Props = {
    iconId: string
    main: string
    styles: string
}
const WeatherIcon: React.FC<Props> = ({ iconId, main, styles }) => (
    <img
        src={`${weatherIconApi}/${iconId}@2x.png`}
        alt={main}
        className={styles}
    />
)

export default WeatherIcon
