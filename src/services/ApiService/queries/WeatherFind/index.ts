import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { UseQueryOptions } from 'react-query/types/react/types'
import { appId, units, weatherApi } from 'services/ApiService/const'
import axiosInstance from 'services/ApiService/fetch'
import { WeatherFindQueryResponse, WeatherFindQueryVariables } from './types'

export const getWeatherFindQueryKey = (params: WeatherFindQueryVariables) => [
    'weatherFind',
    params,
]

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
) =>
    useQuery<WeatherFindQueryResponse, AxiosError>({
        queryKey: getWeatherFindQueryKey(params),
        queryFn: () => getWeatherFindRequest(params),
        ...(config || {}),
    })
