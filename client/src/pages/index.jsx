import React from 'react'

import {
    makeStyles,
    Grid,
    Typography,
    Container,
    Button
} from '@material-ui/core'

// importing images
import question from '../images/questions.svg'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(8, 0)
    },
    title: {
        marginTop: theme.spacing(24),
        marginLeft: theme.spacing(-10),
        position: 'relative'
    },
    createButton: {
        float: 'right',
        position: "relative",
        marginTop: theme.spacing(-20),
        marginRight: theme.spacing(10)
    }
}))

const Index = props => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={-2}>
                    <Grid item xs={6}>
                        <img src={question} alt="" width={"100%"}/>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant={"h4"} className={classes.title}>
                            Create quizzes and share with the world!
                        </Typography>
                    </Grid>
                </Grid>

                <Button variant={"outlined"} className={classes.createButton} size={"large"}>
                    Create
                </Button>
            </Container>
        </div>
    )
}

export default Index