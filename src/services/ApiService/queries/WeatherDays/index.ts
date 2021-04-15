import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { UseQueryOptions } from 'react-query/types/react/types'
import { appId, units, weatherApi } from 'services/ApiService/const'
import axiosInstance from 'services/ApiService/fetch'
import { WeatherDaysQueryResponse, WeatherDaysQueryVariables } from './types'

export const getWeatherDaysQueryKey = (params: WeatherDaysQueryVariables) => [
    'weatherDays',
    params,
]

const getWeatherDaysRequest = async (params: WeatherDaysQueryVariables) => {
    const { data } = await axiosInstance.get<WeatherDaysQueryResponse>(
        `${weatherApi}/forecast/daily`,
        {
            params: {
                id: params.id,
                cnt: params.days,
                units: units,
                appid: appId,
            },
        }
    )
    return data
}

export const useWeatherDaysQuery = (
    params: WeatherDaysQueryVariables,
    config?: UseQueryOptions<WeatherDaysQueryResponse, AxiosError>
) =>
    useQuery<WeatherDaysQueryResponse, AxiosError>({
        queryKey: getWeatherDaysQueryKey(params),
        queryFn: () => getWeatherDaysRequest(params),
        ...(config || {}),
    })
