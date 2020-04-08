import React from 'react'
import { Grid, Button } from '@material-ui/core'

import findImage from '../../utils/findImage'

import { navs } from '../../dump/navData'


const TopTab = props => {

    return (
        <Grid container direction="row">
            {
                navs.map((nav, index) =>
                    <Button
                        key={index}
                        startIcon={findImage(nav.icon)}
                        style={{
                            textTransform: 'capitalize',
                            margin: '0 15px'
                        }}
                    >{nav.title}</Button>
                )
            }
        </Grid>
    )

}

export default TopTab