import { Box, Typography, Grid, ButtonBase } from '@mui/material';
import { Link } from 'react-scroll';

//Data
import Contents from 'Data/About/Content.data';

//Styles
import styles from 'Styles/About/Content.styles';

const Content = () => {
    return (
        <Box>
            <Box>
                <Typography varaint='body1' component='p' sx={styles.AboutText}>
                    {Contents.description}
                </Typography>
                <Typography varaint='body1' component='p' sx={styles.AboutText}>
                    {Contents.aboutme}
                </Typography>
            </Box>
            <Grid container spacing={1.5}>
                <Grid item msm={6} xxs={12}>
                    <Box sx={styles.AboutInfo}>
                        <Typography varaint='body1' component='label'>
                            Name:{' '}
                        </Typography>
                        <Typography varaint='body1' component='span'>
                            {Contents.name}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item msm={6} xxs={12}>
                    <Box sx={styles.AboutInfo}>
                        <Typography varaint='body1' component='label'>
                            Phone:{' '}
                        </Typography>
                        <Typography varaint='body1' component='span'>
                            {Contents.phone}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item msm={6} xxs={12}>
                    <Box sx={styles.AboutInfo}>
                        <Typography varaint='body1' component='label'>
                            Email:{' '}
                        </Typography>
                        <Typography varaint='body1' component='span'>
                            {Contents.email}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item msm={6} xxs={12}>
                    <Box sx={styles.AboutInfo}>
                        <Typography varaint='body1' component='label'>
                            Organization:{' '}
                        </Typography>
                        <Typography varaint='body1' component='span'>
                            {Contents.freelance}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Link to='contact' spy={true} smooth={true}>
                <ButtonBase sx={styles.Button}>
                    Contact Me
                </ButtonBase>
            </Link>
        </Box >
    );
};
export default Content;