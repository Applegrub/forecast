import { AxiosError } from 'axios'
import { useQuery, UseQueryResult } from 'react-query'
import { UseQueryOptions } from 'react-query/types/react/types'
import { appId, units, weatherApi } from 'services/ApiService/const'
import axiosInstance from 'services/ApiService/fetch'
import { WeatherOneQueryResponse, WeatherOneQueryVariables } from './types'

type Return = WeatherOneQueryVariables | string

export const getWeatherOneQueryKey = (
    params: WeatherOneQueryVariables
): Return[] => ['weatherOne', params]

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
): UseQueryResult<WeatherOneQueryResponse, AxiosError<string>> =>
    useQuery<WeatherOneQueryResponse, AxiosError>({
        queryKey: getWeatherOneQueryKey(params),
        queryFn: () => getWeatherOneRequest(params),
        ...(config || {}),
    })
