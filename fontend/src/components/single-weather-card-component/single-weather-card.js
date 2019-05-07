import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    Card,
    CardActionArea,
    CardContent,
    CardActions,
    Typography,
    withStyles,
    CardMedia,
    Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from '@material-ui/core';

const styles = {
    card: {
        maxWidth: '100%'
    },
    media: {
        height: 150
    }
};

class SingleWeatherCard extends React.Component {
    //const { classes } = props;
    state = {
        currentUrl: this.props.match.url
    };

    componentDidMount = () => {
        //console.log(this.props);
    }

    setHasWeatherValue = () => {
        console.log('set hasweather value');
        this.props.setHasDetail(true);
    }


    render() {
        const { classes, theme } = this.props;
        const WeatherDetailrLink = props => <Link to={`${this.props.match.url}/weatherdetails`} {...props} />

        return (
            <div>
                <ExpansionPanel className={classes.card}>
                    <ExpansionPanelSummary expandIcon={<FontAwesomeIcon icon="chevron-down" size="lg" />}>
                        {this.props.city} | {this.props.main}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`http://openweathermap.org/img/w/${this.props.icon}.png`}
                                    title='weather-image-title'
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {this.props.main} | {this.props.time}
                                    </Typography>
                                    <Typography component="p">
                                        {this.props.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            {/* component={WeatherDetailrLink} */}
                                <Button size="small" color="primary" onClick={this.setHasWeatherValue}> 
                                    Details
                                </Button>
                                <Button size="small" color="primary">
                                    Not a Action yet
                                </Button>
                            </CardActions>
                        </Card>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </div>
        )
    }
    
}

export default withStyles(styles)(SingleWeatherCard);