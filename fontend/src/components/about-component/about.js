import React from 'react';
import { 
    Typography,
    withStyles
} from '@material-ui/core';

const styles = {
};

function About(props) {    
    return (
        <div>
            <Typography gutterBottom variant="h5" component="h2">
                About Me
            </Typography>
        </div>
    )
}

export default withStyles(styles)(About);