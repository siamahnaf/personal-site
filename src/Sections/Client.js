import { Container } from '@mui/material';

//SectionHeader
import SectionHeader from 'Utilis/SectionHeader';

//Components
import Slider from 'Components/Client/Slider';

const Client = () => {
    return (
        <Container sx={{ py: '30px' }} component='client' id='clients' disableGutters maxWidth={false}>
            <SectionHeader name='What Clients Say!' />
            <Slider />
        </Container>
    );
};
export default Client;