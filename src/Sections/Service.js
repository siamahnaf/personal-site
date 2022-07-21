import { Container, Box, Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';

//Section Header
import SectionHeader from 'Utilis/SectionHeader';

//Components
import Techs from 'Components/Service/Techs';
import Modals from 'Components/Service/Modals';

//Data
import Services from 'Data/Service/Service.data';

//Styles
import styles from 'Styles/Service/Service.styles';

const Service = () => {
    return (
        <Container sx={{ py: '30px' }} component='section' id='services' disableGutters maxWidth={false}>
            <SectionHeader name='What I do?' />
            <Grid container spacing={2} sx={{ mt: "2rem" }}>
                {Services &&
                    Services.map((service, i) => (
                        <Grid key={i} item md={4} xxs={12}>
                            <Box sx={styles.ServiceBox}>
                                <Icons icon={service.icon} sx={styles.Icon} />
                                <Box sx={styles.ServiceContent}>
                                    <Typography variant='h5' component='h5'>
                                        {service.name}
                                    </Typography>
                                    <Typography variant='body1' component='p' sx={{ mb: '8px' }}>
                                        {service.description}
                                    </Typography>
                                    <Techs techs={service.tech} />
                                    <Modals {...service} />
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container >
    );
};
export default Service;

//Custom Component
const Icons = styled(Icon)``;