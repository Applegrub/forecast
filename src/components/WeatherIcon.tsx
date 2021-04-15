import React from 'react'
import { weatherIconApi } from 'services/ApiService/const'

type Props = {
    iconId: string
    main: string
    styles: string
}
const WeatherIcon = ({ iconId, main, styles }: Props) => (
    <img
        src={`${weatherIconApi}/${iconId}@2x.png`}
        alt={main}
        className={styles}
    />
)
export default WeatherIcon
