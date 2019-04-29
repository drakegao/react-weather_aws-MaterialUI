import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import WeatherComonent from '../components/weather-component/index';
import AboutComponent from '../components/about-component/about';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListItem, IconButton, Typography, List, Drawer, ButtonBase, Toolbar, AppBar, Divider, ListItemIcon, ListItemText } from '@material-ui/core';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  marginLeft: {
    marginLeft: "20px"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class WeatherDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const WeatherLink = props => <Link to="/weather" {...props} />
    const AboutLink = props => <Link to="/about" {...props} />

    return (
            <div className={classes.root}>
                {/* <CssBaseline /> */}
                <AppBar
                  position="fixed"
                  className={classNames(classes.appBar, {
                      [classes.appBarShift]: this.state.open,
                  })}
                >
                <Toolbar disableGutters={!this.state.open}>
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      onClick={this.handleDrawerOpen}
                      className={classNames(classes.menuButton, {
                          [classes.hide]: this.state.open,
                      })}
                    >
                      <FontAwesomeIcon icon="bars" size="lg" />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                      Simple Weather
                    </Typography>
                </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    })}
                    classes={{
                        paper: classNames({
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                        }),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                      <IconButton onClick={this.handleDrawerClose}>
                          <FontAwesomeIcon icon="arrow-left" size="xs" />
                      </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button>
                          <ButtonBase component={WeatherLink}>
                            <ListItemIcon>
                              <FontAwesomeIcon icon="home" size="lg" />
                            </ListItemIcon>
                            <ListItemText>
                              Search Weather
                            </ListItemText>
                          </ButtonBase>
                        </ListItem>
                        <ListItem button>
                          <ButtonBase component={AboutLink}>
                            <FontAwesomeIcon icon="search" size="lg"/>
                              <ListItemText>
                                10 Days Weather
                              </ListItemText>
                          </ButtonBase>
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                  <div className={classes.toolbar} />
                    <Switch>
                      <Route exact path='/' component={WeatherComonent} />
                      <Route path='/weather' component={WeatherComonent} />
                      <Route path='/about' component={AboutComponent} />
                    </Switch>
                </main>
            </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(WeatherDrawer);
