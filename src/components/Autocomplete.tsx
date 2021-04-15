import React, { useMemo } from 'react'
import { FormikHandlers } from 'formik'
import { Link } from 'react-router-dom'
import { Typography, TextField, Grid } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { CityFindInfo } from 'services/ApiService/interfaces/CityFindInfo'
import { formatTemp } from 'utils/helpers'
import WeatherIcon from './WeatherIcon'

const useStyles = makeStyles({
    img: {
        width: 32,
        height: 32,
    },
    link: {
        width: '100%',
        textDecoration: 'none',
        color: 'black',
    },
})

type Props = {
    name: string
    options?: CityFindInfo[]
    label: string
    isLoading: boolean
    value: string
    noOptionsText: string
    onChange: FormikHandlers['handleChange']
}

const WeatherAutocomplete = ({
    name,
    noOptionsText,
    options,
    label,
    isLoading,
    value,
    onChange,
}: Props) => {
    const classes = useStyles()

    const optionsClear = useMemo(
        () =>
            options?.map(({ name, sys: { country } }) => `${name}, ${country}`),
        [options]
    )

    return (
        <Autocomplete
            loading={isLoading}
            disableClearable
            clearOnBlur
            loadingText="Loading..."
            noOptionsText={noOptionsText}
            options={optionsClear || []}
            renderOption={option => {
                const {
                    id,
                    weather,
                    main: { feels_like } = {},
                } = options?.find(
                    ({ name, sys: { country } }) =>
                        `${name}, ${country}` === option
                ) as CityFindInfo

                return (
                    <Link to={`${id}`} className={classes.link}>
                        <Grid container alignItems="center">
                            <Grid item xs={4}>
                                <Typography variant="body1">
                                    {option}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body1">
                                    Feels:&nbsp;
                                    {formatTemp(feels_like as number)}
                                    &nbsp;&#176;C
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <WeatherIcon
                                    main={weather[0].main}
                                    iconId={weather[0].icon}
                                    styles={classes.img}
                                />
                            </Grid>
                        </Grid>
                    </Link>
                )
            }}
            renderInput={params => (
                <TextField
                    {...params}
                    name={name}
                    value={value}
                    onChange={onChange}
                    label={label}
                    variant="outlined"
                />
            )}
        />
    )
}
export default WeatherAutocomplete
