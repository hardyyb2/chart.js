import React from 'react'
import { Grid, Paper, makeStyles } from '@material-ui/core'
import Card from './Card/Card'
import ActivityCard from './Card/ActivityCard'

import { data, activityData } from '../../dump/cardData'


const useStyles = makeStyles({
    root: {
        fontWeight: 'bolder',
        fontSize: '1.25rem'
    }
})

const Cards = props => {
    const classes = useStyles()

    const findColor = severity => {
        let color = ''
        let checkString = severity.trim().toLowerCase()

        checkString === 'low' ?
            (color = 'yellow')
            :
            checkString === 'medium' ?
                (color = 'orange')
                :
                (color = 'red')

        return color
    }

    return (

        <Grid container direction="column"

        >
            <Grid item className={classes.root}>
                {props.cardHeader || ''}
            </Grid>

            <Paper elevate={8} >
                <Grid container direction="column"
                    style={{ padding: '15px' }}
                >

                    {
                        props.activityStream ?

                            activityData.map((item, index) =>
                                <ActivityCard
                                    title={item.title}
                                    key={index}
                                    subtitle={item.subtitle}
                                    time={item.time}
                                    image={item.image}
                                />
                            )
                            :
                            data.map((item, index) =>
                                <Card title={item.title}
                                    key={index}
                                    severity={item.severity}
                                    subtitle={item.subtitle}
                                    count={props.noCount ? '' : item.count}
                                    color={findColor(item.severity)}
                                    prefix={props.prefix || ''}
                                />
                            )
                    }

                </Grid>
            </Paper>
        </Grid >
    )

}

export default Cards