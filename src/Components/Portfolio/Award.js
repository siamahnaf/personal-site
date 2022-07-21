import { Grid, Box, Typography } from '@mui/material';

//Counterup
import Odometers from 'Utilis/Odometers';

//Data
import Awards from 'Data/Portfolio/Awards.data';

//Styles
import styles from 'Styles/Portfolio/Award.styles';

const Award = () => {
    return (
        <Box sx={styles.AwardsContainer}>
            <Grid container spacing={3}>
                {Awards &&
                    Awards.map((award, i) => (
                        <Grid item md={3} smd={3} xxs={6} key={i}>
                            <Box sx={styles.Awards}>
                                <Typography variant='h4' component='h4'>
                                    <Odometers value={award.number} />
                                </Typography>
                                <Typography variant='body1' component='p'>
                                    {award.figure}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Award;