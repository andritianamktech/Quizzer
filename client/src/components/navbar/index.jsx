import React from "react";

import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}))

const Navbar = props => {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <AppBar color={"transparent"} position={"static"} elevation={0}>
                <Toolbar>
                    <Typography className={classes.title}>
                        Quizzer
                    </Typography>

                    <Button>
                        Join
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar