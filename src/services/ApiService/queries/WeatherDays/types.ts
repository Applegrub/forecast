import { City } from 'services/ApiService/interfaces/City'

export type WeatherDaysQueryResponse = {
    city: City
    cnt: number
    cod: string
}

export type WeatherDaysQueryVariables = { id: number; days: number }
