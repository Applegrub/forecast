import { AxiosError } from 'axios'
import { useQuery, UseQueryResult } from 'react-query'
import { UseQueryOptions } from 'react-query/types/react/types'
import { appId, units, weatherApi } from 'services/ApiService/const'
import axiosInstance from 'services/ApiService/fetch'
import { WeatherFindQueryResponse, WeatherFindQueryVariables } from './types'

type Return = WeatherFindQueryVariables | string

export const getWeatherFindQueryKey = (
    params: WeatherFindQueryVariables
): Return[] => ['weatherFind', params]

const getWeatherFindRequest = async (params: WeatherFindQueryVariables) => {
    const { data } = await axiosInstance.get<WeatherFindQueryResponse>(
        `${weatherApi}/find`,
        { params: { q: params.query, units: units, appid: appId } }
    )
    return data
}

export const useWeatherFindQuery = (
    params: WeatherFindQueryVariables,
    config?: UseQueryOptions<WeatherFindQueryResponse, AxiosError>
): UseQueryResult<WeatherFindQueryResponse, AxiosError<string>> =>
    useQuery<WeatherFindQueryResponse, AxiosError>({
        queryKey: getWeatherFindQueryKey(params),
        queryFn: () => getWeatherFindRequest(params),
        ...(config || {}),
    })
