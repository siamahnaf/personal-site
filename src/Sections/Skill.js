import { Container, Grid } from '@mui/material';

//Section Header
import SectionHeader from 'Utilis/SectionHeader';

//Components
import RoadMap from 'Components/Skill/RoadMap';
import Progress from 'Components/Skill/Progress';
import Experience from 'Components/Skill/Experience';

const Skill = () => {
    return (
        <Container sx={{ py: '30px' }} component='section' id='skill' disableGutters maxWidth={false}>
            <SectionHeader name='Education & Skill' />
            <Grid container spacing={5}>
                <Grid item md={6} xxs={12}>
                    <RoadMap />
                </Grid>
                <Grid item md={6} xxs={12}>
                    <Progress />
                </Grid>
            </Grid>
            <Experience />
        </Container>
    );
};
export default Skill;