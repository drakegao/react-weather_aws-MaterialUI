import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Route from './route/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faBars, faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom';

library.add([faHome, faSearch, faBars, faArrowLeft, faChevronDown]);

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {

  componentDidMount() {
    // this.props.getAgencyData();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <BrowserRouter>
          <Route />
        </BrowserRouter>
      </div>
    );
  }
}

export default withStyles(styles)(App);
