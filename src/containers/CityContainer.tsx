import React from 'react'
import City from 'components/City'
import { useWeatherOneDayQuery } from 'services/ApiService/queries/WeatherOneDay'
import { useWeatherDaysQuery } from 'services/ApiService/queries/WeatherDays'

type Props = {
    cityId: number
}
export default function CityContainer({ cityId }: Props) {
    const {
        data: oneDayForecast,
        isLoading: isOneDayLoading,
    } = useWeatherOneDayQuery(
        { id: cityId },
        {
            enabled: !!cityId,
        }
    )
    // const {
    //     data: daysForecast,
    //     isLoading: isFiveDaysLoading,
    // } = useWeatherDaysQuery(
    //     { id: cityId, days: 1 },
    //     {
    //         enabled: !!cityId,
    //     }
    // )

    return <City oneDayForecast={oneDayForecast} />
}
