import React from 'react'
import { useFormik } from 'formik'
import useDebounce from 'utils/useDebounce'
import SearchWeather from 'components/SearchWeather'
import { useWeatherFindQuery } from 'services/ApiService/queries/WeatherFind'

const SearchContainer: React.FC = () => {
    const { values, handleChange } = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: () => Promise.resolve(),
    })

    const debounceValue = useDebounce(values.search, 400)

    const { data, isLoading } = useWeatherFindQuery(
        { query: debounceValue },
        {
            enabled: !!debounceValue,
        }
    )

    return (
        <SearchWeather
            isLoading={isLoading}
            weatherList={data}
            values={values}
            onChange={handleChange}
        />
    )
}
export default SearchContainer
