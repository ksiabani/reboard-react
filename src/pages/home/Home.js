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
import {Pie, PieChart, Cell, Legend, BarChart, Bar} from 'recharts';
import List, {ListItem, ListItemText} from 'material-ui/List';

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
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: 8
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    headline: {
        color: 'white',
        fontSize: '2.3rem',
        fontWeight: '300'
    },
    chart: {
        padding: 8,
        height: 364
    },
    stats: {
        padding: 8,
        height: 364
    },
    statsContent: {
        paddingTop: 0,
        paddingBottom: 0
    }
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

const data = {
    stats: [
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
    ],
    langs: [
        {
            name: "TypeScript",
            value: 2079885,
            color: '#fe7675'
        },
        {
            name: "CSS",
            value: 226314,
            color: '#2dabe5'
        },
        {
            name: "HTML",
            value: 211663,
            color: '#ffc36d'
        },
        {
            name: "Shell",
            value: 23874,
            color: '#54e69d'
        },
        {
            name: "JavaScript",
            value: 20731,
            color: '#fe7675'
        }
    ],
    contributors: [
        {
            "name": "DevVersion",
            "value": 466
        },
        {
            "name": "crisbeto",
            "value": 417
        },
        {
            "name": "jelbourn",
            "value": 327
        },
        {
            "name": "kara",
            "value": 196
        },
        {
            "name": "mmalerba",
            "value": 110
        },
        {
            "name": "andrewseguin",
            "value": 89
        },
        {
            "name": "tinayuangao",
            "value": 68
        },
        {
            "name": "hansl",
            "value": 55
        },
        {
            "name": "robertmesserle",
            "value": 34
        },
        {
            "name": "willshowell",
            "value": 27
        }
    ]
};

const CustomizedLabel = props => {
    return <Text x={-150} y={20} fontFamily={'Open Sans'} fontSize={14} transform="rotate(-90)">Commits</Text>
};

const CustomizedTick = props => {
    const {x, y, payload} = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={-5} y={-13} dy={16} textAnchor="end" fill="#666" transform="rotate(-45)">{payload.value}</text>
        </g>
    )
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

            <Grid item xs={12} sm={8}>
                <Card className={classes.chart}>
                    <Toolbar className={classes.cardHeader}>
                        <Typography type="title" color="inherit">
                            Contributions (last year)
                        </Typography>
                        <IconButton color="inherit">
                            <Icon>more_vert</Icon>
                        </IconButton>
                    </Toolbar>
                    <CardContent>
                        <ResponsiveContainer width="99%" height={260}>
                            <LineChart data={data.stats}>
                                <XAxis dataKey="name"
                                       label="Week"
                                       interval={10}
                                       tick={{fontFamily: "\"Open Sans\", sans-serif", fontSize: "0.9rem"}}
                                       height={50}
                                />
                                <YAxis label={<CustomizedLabel/>} width={50}/>
                                <CartesianGrid/>
                                <Tooltip/>
                                <Line type="linear"
                                      dataKey="value"
                                      strokeWidth="2"
                                      stroke="#FE7675"
                                      dot={false}
                                      activeDot={{r: 5}}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Card className={classes.stats}>
                    <Toolbar className={classes.cardHeader}>
                        <Typography type="title" color="inherit">
                            Stats
                        </Typography>
                        <IconButton color="inherit">
                            <Icon>more_vert</Icon>
                        </IconButton>
                    </Toolbar>
                    <CardContent className={classes.statsContent}>
                        <List className={classes.statsContent}>
                            {stats.map(stat =>
                                <ListItem key={stat.id}>
                                    <Icon color="accent">{stat.icon}</Icon>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography type="title">
                                                {stat.value}
                                            </Typography>
                                        }
                                        secondary={<Typography type="subheading">
                                            {stat.text}
                                        </Typography>}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Card className={classes.chart}>
                    <Toolbar className={classes.cardHeader}>
                        <Typography type="title" color="inherit">
                            Languages (bytes)
                        </Typography>
                        <IconButton color="inherit">
                            <Icon>more_vert</Icon>
                        </IconButton>
                    </Toolbar>
                    <CardContent>
                        <ResponsiveContainer width="99%" height={260}>
                            <PieChart width={200} height={200}>
                                <Pie data={data.langs}
                                     dataKey="value"
                                     nameKey="name"
                                     valueKey="value"
                                     cx="50%"
                                     cy="50%"
                                     innerRadius={60}
                                     outerRadius={80}
                                     fill="#8884d8"
                                     paddingAngle={5}
                                     label={(payload) => payload.name}
                                >
                                    {data.langs.map(lang => <Cell key={lang.name} fill={lang.color}/>)}
                                </Pie>
                                <Tooltip/>
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Card className={classes.chart}>
                    <Toolbar className={classes.cardHeader}>
                        <Typography type="title" color="inherit">
                            Top contributors
                        </Typography>
                        <IconButton color="inherit">
                            <Icon>more_vert</Icon>
                        </IconButton>
                    </Toolbar>
                    <CardContent>
                        <ResponsiveContainer width="99%" height={260}>
                            <BarChart data={data.contributors}>
                                <CartesianGrid vertical={false}/>
                                <XAxis dataKey="name" tick={<CustomizedTick/>} interval={0} height={80}/>
                                <YAxis type="number" domain={[0, 'dataMax']}/>
                                <Tooltip />
                                <Bar fill="#8884d8" dataKey="value"/>
                            </BarChart>
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

