import React from 'react'
import { CityOneDay } from 'services/ApiService/interfaces/CityOneDay'
import { Box, Button, Divider, Typography } from '@material-ui/core'
import { formatTemp, getFormattedDate } from 'utils/helpers'
import { makeStyles } from '@material-ui/core/styles'
import WeatherIcon from './WeatherIcon'

const useStyles = makeStyles(theme => ({
    img: {
        width: 80,
        height: 80,
        paddingLeft: theme.spacing(3),
    },
}))

type Props = {
    oneDayForecast?: CityOneDay
    onGoBack: () => void
}

const City: React.FC<Props> = ({
    oneDayForecast: {
        name,
        sys: { country = '' } = {},
        dt,
        weather,
        main: { temp = undefined } = {},
    } = {},
    onGoBack,
}) => {
    const classes = useStyles()

    return (
        <Box display="flex">
            <Box>
                <Typography variant="h3">{`${
                    name as string
                }, ${country}`}</Typography>
                <Typography variant="subtitle1" color="primary">
                    {getFormattedDate(new Date((dt as number) * 1000))}
                </Typography>
                <Box display="flex" alignItems="center" pt={4} pb={3}>
                    <Typography variant="h2">
                        {formatTemp(temp)}
                        &nbsp;&#176;C
                    </Typography>
                    <WeatherIcon
                        main={weather?.[0].main as string}
                        iconId={weather?.[0].icon as string}
                        styles={classes.img}
                    />
                </Box>
                <Button variant="contained" color="primary" onClick={onGoBack}>
                    Back to search
                </Button>
            </Box>
            <Divider orientation="vertical" />
        </Box>
    )
}
export default City
