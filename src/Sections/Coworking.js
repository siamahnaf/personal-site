import { Container, Typography } from '@mui/material';

//Components
import Cabbage from 'Components/Coworking/Cabbage';
import CodeStation from "Components/Coworking/CodeStation";

const Coworking = () => {
    return (
        <Container sx={{ py: '30px' }} component='section' id='cabbage' disableGutters maxWidth={false}>
            <Typography variant='h6' component='h6' sx={{ mb: '25px' }}>
                My Organizations
            </Typography>
            <Cabbage />
            <CodeStation />
        </Container>
    );
};
export default Coworking;