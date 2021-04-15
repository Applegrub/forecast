import { City } from 'services/ApiService/interfaces/City'
import { Range } from 'services/ApiService/rangeType'

export type WeatherDaysQueryResponse = {
    city: City
    cnt: Range<1, 16>
    cod: string
}

export type WeatherDaysQueryVariables = { id: number; days: Range<1, 16> }
