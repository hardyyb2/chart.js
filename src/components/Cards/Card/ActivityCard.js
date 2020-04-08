import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import findImage from '../../../utils/findImage'

const useStyles = makeStyles({
    root: {
        padding: '8px'
    },
    rightImageMargin:
    {
        marginRight: '12px'
    },
    time: {
        color: '#ccc',
        marginLeft: 'auto'
    }
})

const ActivityCard = props => {
    const classes = useStyles()

    return (
        <Grid container direction="row"
            justify="flex-start"
            className={classes.root}
        >
            <Grid item className={classes.rightImageMargin} >
                {findImage(props.image)}
            </Grid>
            <Grid item>
                <Grid item style={{ padding: '0px 10px 0px 0px' }}> <b>{props.title}</b></Grid>
                <Grid item style={{ color: '#ccc' }}>
                    {props.subtitle}
                </Grid>
            </Grid>
            <Grid item className={classes.time}>
                {props.time}
            </Grid>
        </Grid>
    )

}

export default ActivityCard