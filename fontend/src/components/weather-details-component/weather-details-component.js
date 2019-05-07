import React, { Component, Fragment } from 'react';
import { 
    withStyles,
    Typography,
    Grid,
    Button,
    TextField
} from '@material-ui/core';

const styles = theme => ({
    root: {
      flexGrow: 1
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    button: {
        marginLeft: '10px',
        marginBottom: '10px'
    },
    menu: {
        width: 200,
    }
});

class WeatherDetailComponent extends Component {

    render() {
        return(
            <div>Detail Page</div>
            
        )
    }
}

export default withStyles(styles)(WeatherDetailComponent);