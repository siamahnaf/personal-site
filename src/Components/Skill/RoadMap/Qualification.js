import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';

//Data
import Qualifications from 'Data/Skill/Qualifications.data';

//Styles
import styles from 'Styles/Skill/RoadMap.styles';

const Qualification = () => {
    return (
        <Box sx={styles.EducationContainer}>
            {Qualifications &&
                Qualifications.map((qualification, i) => (
                    <Stack key={i} direction='row' sx={styles.SingleEducations}>
                        <Box className='css-523ht4-text' sx={styles.EducationText}>
                            <Typography variant='body1' component='h6'>
                                {qualification.year}
                            </Typography>
                        </Box>
                        <Box sx={styles.Icons}>
                            <Icon
                                icon='fa-solid:user-graduate'
                            />
                        </Box>
                        <Box className='css-73hy74-box' sx={styles.EducationParagraph}>
                            <Typography variant='h6' component='h6'>
                                {qualification.certificate}{' '}
                                <Typography variant='body1' component='span'>
                                    ({qualification.course})
                                </Typography>
                            </Typography>
                            <Typography variant='body1' component='p'>
                                {qualification.institution},{' '}
                                <Typography variant='body1' component='span'>
                                    {qualification.location}
                                </Typography>
                            </Typography>
                        </Box>
                    </Stack>
                ))
            }
        </Box>
    );
};
export default Qualification;

//Custom Component
const Icons = styled(Icon)``;