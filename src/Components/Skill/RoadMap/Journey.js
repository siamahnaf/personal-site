import { Box, Stack, Typography } from '@mui/material';

//Data
import Journeys from 'Data/Skill/Journeys.data';

//Styles
import styles from 'Styles/Skill/RoadMap.styles';

const Journey = () => {
    return (
        <Box sx={styles.JourneyContainer}>
            {Journeys &&
                Journeys.map((journey, i) => (
                    <Stack direction='row' key={i} sx={styles.SingleJourney}>
                        <Typography variant='body1' component='span' sx={styles.JourneyLeft}>
                            {journey.year}
                        </Typography>
                        <Typography variant='body1' component='p' sx={styles.JourneyParagraph}>
                            <Typography variant='body1' component='span'>
                                {journey.range}{' '}
                            </Typography>
                            {journey.journey}
                        </Typography>
                    </Stack>
                ))
            }
        </Box>
    );
};
export default Journey;