import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import WeatherDetailComponent from '../weather-details-component/weather-details-component';
import { 
    withStyles,
    Typography,
    Grid,
    Button,
    TextField,
    MenuItem
} from '@material-ui/core';
import SingleWeatherCard from '../single-weather-card-component/index';

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
        country: "",
        hasDetail: false
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
        console.log("click");
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

    // renderWeatherCards = () => {
    //     let count = 0;
    //     return this.props.weatherData.map((singleWeather) => {
    //         count++
    //         return (
    //             <Grid key={count} item xs={12} md={4}>
    //                 <SingleWeatherCard
    //                     icon={singleWeather.icon} 
    //                     main={singleWeather.main} 
    //                     description={singleWeather.description} 
    //                     match={this.props.match}
    //                 />
    //             </Grid>
    //         );
    //     })
    // }

    renderWeatherCardsList = () => {
        let count = 0;

        return this.props.weatherData.map((singleWeather) => {
            count++;
            //console.log(singleWeather);
            return(
                // <Grid key={count} item xs={12} md={12}>
                    <SingleWeatherCard key={count}
                        icon={singleWeather.icon} 
                        main={singleWeather.main} 
                        description={singleWeather.description}
                        city={singleWeather.city}
                        time={singleWeather.time}
                        match={this.props.match}
                    />
                // </Grid>
            );
        });  
    }

    renderWeatherDetails = () => {
        return (
            (this.props.hasDetail)
            ? 
            <WeatherDetailComponent />
            :
            <Typography variant="display4" component="h4">
                Select a weather to check the details
            </Typography> 
        );
    }

    render() {
        const { classes, theme } = this.props;

        return(
            <div>
                <Typography gutterBottom variant="h5" component="h2">
                    Today's weather, status: {this.props.status}, hasWeather: {this.props.getHasWeather ? "yes" : "no"}
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

                        <Grid container alignItems="flex-start" justify="space-around" spacing={16} >    
                            <Grid item lg={4} sm={12}>
                                {/* <Grid container alignItems="flex-start" justify="space-around" spacing={16} >   */}
                                { this.renderWeatherCardsList() }
                                {/* </Grid> */}
                            </Grid>
                            <Grid item md={8} sm={12}>
                                {/* for weather details */}
                               
                                {this.renderWeatherDetails()} 
                                   
                            </Grid>
                        </Grid>

                   </Fragment>
                   :
                   'no weather data'
                }               

                <Switch>
                    <Route path={`${this.state.currentUrl}/weatherdetail`} component={WeatherDetailComponent} />
                </Switch>

            </div>
        )
    }
}

export default withStyles(styles)(Weather);