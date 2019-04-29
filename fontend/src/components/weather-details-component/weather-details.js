import React from 'react';
import { 
    Card,
    CardActionArea,
    CardContent,
    Typography,
    withStyles,
    CardMedia
} from '@material-ui/core';

const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 150
    }
};

function WeatherDetail(props) {
    console.log(props);
    const { classes } = props;
    return (
        <div>
            <CardActionArea>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={`http://openweathermap.org/img/w/${props.icon}.png`}
                        title='weather-image-title'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.main}
                        </Typography>
                        <Typography component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </div>
    )
}

export default withStyles(styles)(WeatherDetail);