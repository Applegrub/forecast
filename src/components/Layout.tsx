import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
})
type Props = {
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}

export default Layout
