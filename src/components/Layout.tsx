import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background:
            'linear-gradient(134.18deg, #CDF0FF 9.2%, ' +
            'rgba(186, 223, 244, 0.98991) 21.69%, ' +
            'rgba(56, 102, 169, 0.92) 63.84%, #2E5DA4 83.89%, #2E5DA4 91.59%)',
    },
    paper: {
        padding: theme.spacing(6),
        boxShadow: '0px 0px 30px rgba(13, 21, 63, 0.25)',
        borderRadius: 16,
    },
}))

type Props = {
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>{children}</Paper>
        </div>
    )
}

export default Layout
