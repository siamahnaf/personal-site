import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';

//Data
import Educations from 'Data/Skill/Educations.data';

//Styles
import styles from 'Styles/Skill/RoadMap.styles';

const Education = () => {
    return (
        <Box sx={styles.EducationContainer}>
            {Educations &&
                Educations.map((education, i) => (
                    <Stack key={i} direction='row' sx={styles.SingleEducations}>
                        <Box sx={styles.EducationText} className='css-523ht4-text'>
                            <Typography variant='body1' component='h6'>
                                {education.year}
                            </Typography>
                        </Box>
                        <Box sx={styles.Icons}>
                            <Icon
                                icon='fa-solid:graduation-cap'
                            />
                        </Box>
                        <Box className='css-73hy74-box' sx={styles.EducationParagraph}>
                            <Typography variant='h6' component='h6'>
                                {education.course} {' '}
                                <Typography variant='body1' component='span'>
                                    ({education.subject})
                                </Typography>
                            </Typography>
                            <Typography variant='body1' component='p'>
                                {education.university},{' '}
                                <Typography variant='body1' component='span'>
                                    {education.location}
                                </Typography>
                            </Typography>
                        </Box>
                    </Stack>
                ))
            }
        </Box>
    );
};
export default Education;

//Custom Component
const Icons = styled(Icon)``;