import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//Data
import Features from 'Data/Hero/Feature.data';

//Styles
import styles from 'Styles/Hero/Feature.styles';

const Feature = () => {
    const theme = useTheme();
    return (
        <Box sx={{ mb: '5rem' }}>
            <Box sx={styles.Title}>
                <Typography variant='h6' component='h6'>
                    Languages/frameworks
                </Typography>
                <Typography variant='body1' component='p'>
                    These are a few of the languages/frameworks I&apos;ve used in projects and am most familiar with.
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {Features &&
                    Features.map((feature, i) => (
                        <Grid key={i} item lg={1.5} md={2} smd={2.4} msm={3} xs={4} xxs={6}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Box sx={{ background: feature.background, ...styles.Images }}>
                                    {theme.palette.mode === 'light' &&
                                        <Box component='img' width='100%' src={feature.image} alt='Features' />
                                    }
                                    {theme.palette.mode === 'dark' &&
                                        <>
                                            {feature.dark &&
                                                <Box component='img' width='100%' src={feature.dark} alt='Features' />
                                            }
                                            {!feature.dark &&
                                                <Box component='img' width='100%' src={feature.image} alt='Features' />
                                            }
                                        </>
                                    }
                                </Box>
                                <Typography variant='body1' component='figure' sx={styles.CardText}>
                                    {feature.figure}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Feature;