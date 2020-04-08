import React from 'react'
import { Grid, Chip } from '@material-ui/core'


const Card = props => {
    return (
        <Grid container direction="row"
            justify="space-between"
            style={{
                padding: '8px'
            }}
        >
            <Grid item direction="column"
            >
                <Grid container direction="row" style={{ marginRight: '15px' }}>
                    <Grid item style={{ padding: '0px 10px 0px 0px' }}> <b>{props.title}</b></Grid>
                    <Grid item>
                        <Chip
                            label={props.severity}
                            style={{
                                background: (!!props.color ? props.color : 'white'),
                                color: 'white'
                            }}
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Grid container style={{ color: '#ccc' }}>
                    {props.subtitle}
                </Grid>
            </Grid>
            <Grid item
                style={{
                    color: (!!props.color ? props.color : 'white'),
                }}>
                {props.prefix || ''}{props.count}
            </Grid>
        </Grid>
    )

}

export default Card