import { Coord } from './Coord'
import { CityMain } from './CityMain'
import { Wind } from './Wind'
import { Weather } from './Weather'

export interface CityFindInfo {
    id: number
    name: string
    coord: Coord
    main: CityMain
    dt: number
    wind: Wind
    sys: {
        country: string
    }
    rain: {
        '1h': number | null
    }
    snow: number
    clouds: {
        all: number
    }
    weather: Weather[]
}
