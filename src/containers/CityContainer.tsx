import React from 'react'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useWeatherOneDayQuery } from 'services/ApiService/queries/WeatherOneDay'
import City from 'components/City'
import { mainPath } from 'routes'

type Props = {
    cityId: number
}
const CityContainer: React.FC<Props> = ({ cityId }) => {
    const navigate = useNavigate()
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

    const handleGoBack = () => {
        navigate(`/${mainPath}`)
    }

    return isOneDayLoading ? (
        <CircularProgress />
    ) : (
        <City oneDayForecast={oneDayForecast} onGoBack={handleGoBack} />
    )
}

export default CityContainer
