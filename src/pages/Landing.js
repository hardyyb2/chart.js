import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import HelpIcon from '@material-ui/icons/Help';

import Cards from '../components/Cards/Cards'
import TopTab from '../components/TopTab/TopTab'
import DataChart from '../components/Charts/DataChart'
import BussinessImpact from '../components/Charts/BussinessImpact'

import BrandLogo from '../assets/images/brandLogo.jpg'

const useStyles = makeStyles({
    titleBar: {
        boxShadow: '2px 2px 2px 2px #ccc'
    },
    logo: {
        padding: '5px'
    },
    topTab: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    leftMain: {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
})

const Landing = () => {
    const classes = useStyles()

    const imageSize = { width: '30px' }

    return (
        <Grid container >
            {/* titlebar */}
            <Grid name="titleBar" container direction="row" justify="space-between" className={classes.titleBar}
            >
                <Grid item className={classes.logo}>
                    <img src={BrandLogo} {...imageSize} />
                </Grid>
                <Grid item className={classes.topTab}>
                    <TopTab />
                </Grid>
                <Grid item style={{ padding: '5px' }}>
                    <HelpIcon />
                    <HelpIcon />
                </Grid>
            </Grid>
            {/* datachart */}
            <Grid container>
                <DataChart />
            </Grid>
            {/* lower part */}
            <Grid container direction="row" justify="flex-start">
                {/* business impact */}
                <Grid item className={classes.leftMain}>
                    <Grid item>
                        <BussinessImpact />
                    </Grid>
                    <Grid item>

                        <BussinessImpact />
                    </Grid>
                </Grid>
                {/* cards */}
                <Grid item style={{ display: 'flex' }}>
                    <Grid item style={{ margin: '15px' }} >
                        <Cards id="error" cardHeader="Top Errors" />
                        <Cards id="hbusinnes" cardHeader="Highest Business Impact" prefix="$" />
                    </Grid>
                    <Grid item style={{ margin: '15px' }}>
                        <Cards id="atm" cardHeader="Assigned to me" noCount />
                        <Cards id="as" cardHeader="Activity Stream" activityStream />
                    </Grid>
                </Grid>

            </Grid>
        </Grid >
    );
}

export default Landing;
