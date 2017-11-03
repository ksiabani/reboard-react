import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

const styles = theme => ({
    card: {
        // minWidth: 275,
        backgroundColor: '#fe7675'
    },
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
    headline: {
        color: 'white',
        fontSize: '2.3rem',
        fontWeight: '300'
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

const Home = props => {
    const {classes} = props;
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <Grid container>

            {stats.map(stat =>
                <Grid item xs={12} md={6} lg={3} key={stat.id}>
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

        </Grid>
    );
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

