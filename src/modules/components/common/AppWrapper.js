import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Icon from 'material-ui/Icon';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 290;

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        // marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        boxShadow: 'unset',
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    // drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 290,
        height: '100%',
        backgroundColor: '#fafafa',
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100vh',
            borderRight: 0
        },
    },
    content: {
        // backgroundColor: theme.palette.background.default,
        backgroundColor: '#f5f5f5',
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
    drawerAppBar: {
        position: 'static',
        boxShadow: 'unset'
    },
    appToolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end',
        }
    },
    pageTitle: {
        flex: 1
    },
    link: {
        color: 'black',
        textDecoration: 'none'
    }
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render() {
        const {classes, theme} = this.props;

        const drawer = (
            <div>
                {/*<div className={classes.drawerHeader}/>*/}
                <List>
                    <NavLink to="/" activeStyle={{ color:'black' }} className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon>home</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/issues" activeStyle={{ color:'black' }} className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon>bug_report</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Issues"/>
                        </ListItem>
                    </NavLink>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>settings</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>code</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Open in GitHub"/>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar}>
                        <Toolbar className={classes.appToolbar}>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Hidden mdUp>
                                <Typography type="title" color="inherit" noWrap className={classes.pageTitle}>
                                    Home
                                </Typography>
                            </Hidden>
                            <IconButton
                                color="contrast"
                                aria-label="settings"
                            >
                                <Icon>settings</Icon>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <Drawer
                            type="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            classes={{paper: classes.drawerPaper}}
                            onRequestClose={this.handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            <AppBar className={classes.drawerAppBar}>
                                <Toolbar>
                                    <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                                        {/*<MenuIcon />*/}
                                        <Icon>dashboard</Icon>
                                    </IconButton>
                                    <Typography type="title" color="inherit" className={classes.flex}>
                                        Reboard
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden mdDown implementation="css">
                        <Drawer
                            type="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <AppBar className={classes.drawerAppBar}>
                                <Toolbar>
                                    <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                                        {/*<MenuIcon />*/}
                                        <Icon>dashboard</Icon>
                                    </IconButton>
                                    <Typography type="title" color="inherit" className={classes.flex}>
                                        Reboard
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ResponsiveDrawer);
