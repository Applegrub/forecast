import { CityFindInfo } from 'services/ApiService/interfaces/CityFindInfo'

export type WeatherFindQueryResponse = {
    count: number
    list: CityFindInfo[]
}

export type WeatherFindQueryVariables = { query: string }
