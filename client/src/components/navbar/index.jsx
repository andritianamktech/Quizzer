import React from "react";

import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core'

const Navbar = props => {
    return (
        <div>
            <AppBar color={"transparent"} position={"static"} elevation={0}>
                <Toolbar>
                    <Typography>
                        Quizzer
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar