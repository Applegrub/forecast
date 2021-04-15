import { Coord } from './Coord'
import { CityMain } from './CityMain'
import { Wind } from './Wind'
import { Weather } from './Weather'

export interface CityOneDay {
    coord: Coord
    weather: Weather[]
    base: 'stations'
    main: CityMain
    visibility: number
    wind: Wind
    rain: {
        '1h': 0.14
    }
    clouds: {
        all: number
    }
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}
