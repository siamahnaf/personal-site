import { Container, Box, Grid } from '@mui/material';

//Section Header
import SectionHeader from 'Utilis/SectionHeader';

//Components
import Social from 'Components/About/Social';
import Content from 'Components/About/Content';

const About = () => {
    return (
        <Container sx={{ py: '30px' }} component='section' id='about' disableGutters maxWidth={false}>
            <Grid container spacing={2}>
                <Grid item md={4.8} xxs={12}>
                    <Box sx={{ textAlign: { md: 'unset', xxs: 'center' } }}>
                        <Social />
                    </Box>
                </Grid>
                <Grid item md={7.2} xxs={12}>
                    <SectionHeader name='Biography' />
                    <Content />
                </Grid>
            </Grid>
        </Container>
    );
};
export default About;