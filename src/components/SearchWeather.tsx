import React from 'react'
import { FormikHandlers } from 'formik'
import { Box, Typography } from '@material-ui/core'
import { WeatherFindQueryResponse } from 'services/ApiService/queries/WeatherFind/types'
import WeatherAutocomplete from './Autocomplete'

type Props = {
    isLoading: boolean
    weatherList?: WeatherFindQueryResponse
    values: { search: string }
    onChange: FormikHandlers['handleChange']
}

const SearchWeather = ({
    isLoading,
    weatherList,
    values: { search },
    onChange,
}: Props) => (
    <>
        <Typography variant="h2">Weather Forecast</Typography>
        <Box my={3}>
            <WeatherAutocomplete
                name="search"
                label="Write full name of your city"
                noOptionsText="No cities =("
                options={weatherList?.list}
                isLoading={isLoading}
                value={search}
                onChange={onChange}
            />
        </Box>
    </>
)

export default SearchWeather
