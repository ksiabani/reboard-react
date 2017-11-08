import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import {LineChart, Text, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const styles = theme => ({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        // color: theme.palette.text.secondary
        color: 'white',
        fontWeight: '400'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardHeader: {
        fontSize: 14
    },
    headline: {
        color: 'white',
        fontSize: '2.3rem',
        fontWeight: '300'
    },
    chart: {
        padding: 8,
        height: 340
    },
    chartHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: 8
    },
});

const stats = [
    {
        id: 1,
        value: '10,152',
        text: 'stargazers',
        icon: 'star',
        color: '#fe7675'
    },
    {
        id: 2,
        value: '2,344',
        text: 'forks',
        icon: 'content_copy',
        color: '#2dabe5'
    },
    {
        id: 3,
        value: '689',
        text: 'open issues',
        icon: 'bug_report',
        color: '#ffc36d'
    },
    {
        id: 4,
        value: '1,000',
        text: 'subscribers',
        icon: 'rss_feed',
        color: '#54e69d'
    }
];

const data = [
    {name: 1, value: 24},
    {name: 2, value: 17},
    {name: 3, value: 12},
    {name: 4, value: 16},
    {name: 5, value: 9},
    {name: 6, value: 8},
    {name: 7, value: 27},
    {name: 8, value: 10},
    {name: 9, value: 8},
    {name: 10, value: 5},
    {name: 11, value: 30},
    {name: 12, value: 41},
    {name: 13, value: 35},
    {name: 14, value: 46},
    {name: 15, value: 38},
    {name: 16, value: 5},
    {name: 17, value: 37},
    {name: 18, value: 38},
    {name: 19, value: 36},
    {name: 20, value: 70},
    {name: 21, value: 3},
    {name: 22, value: 42},
    {name: 23, value: 33},
    {name: 24, value: 32},
    {name: 25, value: 19},
    {name: 26, value: 31},
    {name: 27, value: 54},
    {name: 28, value: 31},
    {name: 29, value: 25},
    {name: 30, value: 32},
    {name: 31, value: 59},
    {name: 32, value: 26},
    {name: 33, value: 12},
    {name: 34, value: 43},
    {name: 35, value: 12},
    {name: 36, value: 41},
    {name: 37, value: 55},
    {name: 38, value: 33},
    {name: 39, value: 16},
    {name: 40, value: 33},
    {name: 41, value: 40},
    {name: 42, value: 47},
    {name: 43, value: 32},
    {name: 44, value: 66},
    {name: 45, value: 36},
    {name: 46, value: 50},
    {name: 47, value: 31},
    {name: 48, value: 37},
    {name: 49, value: 74},
    {name: 50, value: 52},
    {name: 51, value: 79},
    {name: 52, value: 68}
];

const CustomizedLabel = props => {
    return <Text x={-150} y={20} fontFamily={'Open Sans'} fontSize={14} transform="rotate(-90)">Commits</Text>
};


const Home = props => {
    const {classes} = props;
    // const bull = <span className={classes.bullet}>•</span>;
    return (
        <Grid container>
            {stats.map(stat =>
                <Grid item xs={12} sm={6} md={6} lg={3} key={stat.id}>
                    <Card className={classes.card} style={{backgroundColor: stat.color}}>
                        <CardContent>
                            <Typography type="headline" component="h2" className={classes.headline}>
                                {stat.value}
                            </Typography>
                            <Typography type="body1" className={classes.pos}>
                                {stat.text}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <IconButton color="contrast">
                                <Icon>more_vert</Icon>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            )}
            <Grid item xs={12} sm={7}>
                <Card className={classes.chart}>
                    <Toolbar className={classes.chartHeader}>
                        <Typography type="title" color="inherit">
                            Contributions (last year)
                        </Typography>
                        <IconButton color="inherit">
                            <Icon>more_vert</Icon>
                        </IconButton>
                    </Toolbar>
                    <CardContent>
                        <ResponsiveContainer width="99%" height={260}>
                            <LineChart data={data}>
                                <XAxis
                                    dataKey="name"
                                    label="Week"
                                    interval={10}
                                    tick={{fontFamily: "\"Open Sans\", sans-serif", fontSize: "0.9rem"}}
                                    height={50}
                                />
                                <YAxis label={<CustomizedLabel/>} width={50}/>
                                <CartesianGrid/>
                                <Tooltip/>
                                <Line type="linear" dataKey="value" strokeWidth="2" stroke="#FE7675" dot={false}
                                      activeDot={{r: 5}}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

