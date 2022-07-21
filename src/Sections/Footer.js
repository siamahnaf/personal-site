import { Container, Grid } from '@mui/material';

//Section Header
import SectionHeader from 'Utilis/SectionHeader';

//Components
import Contact from 'Components/Footer/Contact';
import Social from 'Components/Footer/Social';
import Form from 'Components/Footer/Form';
import Copyright from 'Components/Footer/Copyright';

const Footer = () => {
    return (
        <Container sx={{ pt: '30px', pb: '15px' }} component='section' id='contact' disableGutters maxWidth={false}>
            <SectionHeader name='Get in Touch' />
            <Contact />
            <Grid container spacing={2}>
                <Grid item md={4} lsm={3} xxs={12}>
                    <Social />
                </Grid>
                <Grid item md={8} lsm={9} xxs={12}>
                    <Form />
                </Grid>
            </Grid>
            <Copyright />
        </Container>
    );
};
export default Footer;