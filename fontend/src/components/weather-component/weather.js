import React, { Component, Fragment } from 'react';
import { 
    withStyles,
    Typography,
    Grid,
    Button,
    TextField,
    MenuItem
} from '@material-ui/core';
import WeatherDetail from '../weather-details-component/weather-details';
import States from '../../meta-data/states';

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

class Weather extends Component {
    state = {
        hasTodayWeather: "",
        city: "",
        country: ""
    };

    componentDidlUpdate = (nextProps) => {
        // let preStateStatus = this.state.status;
        // this.setState({
        //     ...this.state.status,
        //     status: this.props.status
        // });
    }

    componentWillMount = () => {
    }

    componentDidMount = () => {
    }

    handleChange = (event) => {
        this.setState({ hasTodayWeather: event.target.value });
    }

    onChangeCity = (event) => {
        let preState = this.state.States;
        this.setState({
            ...preState,
            city: event.target.value,
        });

    }

    onChangeCountry = (event) => {
        this.setState({ country: event.target.value });
    }

    searchWeather = () => {
        let data = {
            city: this.state.city,
            country: this.state.country
        }
        this.props.getWeatherData(data);
    }

    printWeather = () => {
        if(this.props.weatherData !== null) {
            console.log(this.props.weatherData);
        }
    }

    renderWeatherCards = () => {
        let count = 0;
        return this.props.weatherData.map((singleWeather) => {
            count++
            return (
                <Grid key={count} item xs={12} md={4}>
                    <WeatherDetail
                        icon={singleWeather.icon} 
                        main={singleWeather.main} 
                        description={singleWeather.description} 
                    />
                </Grid>
            );
        })
    }

    render() {
        const { classes, theme } = this.props;
        return(
            <div>
                <Typography gutterBottom variant="h5" component="h2">
                    Today's weather, status: {this.props.status}
                </Typography>

                <Grid container spacing = {16}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="city-search"
                            label="City field"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={this.onChangeCity}
                            onClick={this.handleChange}
                        >
                        </TextField>
                        <TextField
                            fullWidth
                            id="country-search"
                            label="Country field"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={this.onChangeCountry}
                            onClick={this.handleChange}
                            />
                    </Grid>
                    <Button variant="contained" color="primary" className={classes.button} size="small" onClick={this.searchWeather}>
                        Search
                    </Button>
                    
                </Grid>
                {   
                   (this.props.status === 'LOADED')
                   ? 
                   <Fragment>
                        <Grid container spacing = {16}>
                            { this.renderWeatherCards() }
                        </Grid>
                   </Fragment>
                   :
                   'no weather data'
                }               
            </div>
        )
    }
}

export default withStyles(styles)(Weather);