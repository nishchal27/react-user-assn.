import { Box, Typography, makeStyles } from '@material-ui/core';
import Youtube from '../Assets/Images/youtube1.png';
import InstaTele from '../Assets/Images/InstaTele1.png';

const useStyles = makeStyles({
    component: {
        margin: 30,
        '& > *': {
            marginTop: -10,
            marginBottom: 20
        }
    },
    image: {
        width: '40%',
        height: '50%'
    }
})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">NOTE: same (duplicate) phone numbers among the users (collections) will not be saved in the database. No user will be created.</Typography>
            <Box style={{display: 'flex'}}>
                <img src={Youtube} className={classes.image} />
                <img src={InstaTele} className={classes.image} />
            </Box>
        </Box>
    )
}

export default CodeForInterview;