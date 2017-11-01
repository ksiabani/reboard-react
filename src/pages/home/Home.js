import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
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

const Home = props => {
    const {classes} = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Grid container>

            <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" component="h2" className={classes.headline}>
                            10.152
                        </Typography>
                        <Typography type="body1" className={classes.pos}>
                            stargazers
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <IconButton color="contrast">
                            <Icon>more_vert</Icon>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" component="h2" className={classes.headline}>
                            2.344
                        </Typography>
                        <Typography type="body1" className={classes.pos}>
                            forks
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <IconButton color="contrast">
                            <Icon>more_vert</Icon>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" component="h2" className={classes.headline}>
                            689
                        </Typography>
                        <Typography type="body1" className={classes.pos}>
                            open issues
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <IconButton color="contrast">
                            <Icon>more_vert</Icon>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" component="h2" className={classes.headline}>
                            1000
                        </Typography>
                        <Typography type="body1" className={classes.pos}>
                            subscribers
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <IconButton color="contrast">
                            <Icon>more_vert</Icon>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>

        </Grid>
    );
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);