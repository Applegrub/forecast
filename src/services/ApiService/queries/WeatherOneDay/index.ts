import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { UseQueryOptions } from 'react-query/types/react/types'
import { appId, units, weatherApi } from 'services/ApiService/const'
import axiosInstance from 'services/ApiService/fetch'
import { WeatherOneQueryResponse, WeatherOneQueryVariables } from './types'

export const getWeatherOneQueryKey = (params: WeatherOneQueryVariables) => [
    'weatherOne',
    params,
]

const getWeatherOneRequest = async (params: WeatherOneQueryVariables) => {
    const { data } = await axiosInstance.get<WeatherOneQueryResponse>(
        `${weatherApi}/weather`,
        { params: { id: params.id, units: units, appid: appId } }
    )
    return data
}

export const useWeatherOneDayQuery = (
    params: WeatherOneQueryVariables,
    config?: UseQueryOptions<WeatherOneQueryResponse, AxiosError>
) =>
    useQuery<WeatherOneQueryResponse, AxiosError>({
        queryKey: getWeatherOneQueryKey(params),
        queryFn: () => getWeatherOneRequest(params),
        ...(config || {}),
    })
