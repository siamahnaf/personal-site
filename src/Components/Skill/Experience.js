import { Box, Stack, Typography, ButtonBase } from '@mui/material';

//Data
import Experiences from 'Data/Skill/Experiences.data';

//Styles
import styles from 'Styles/Skill/Experience.styles';

const Exprience = () => {
    return (
        <Box>
            <Typography variant='h5' component='h5' sx={styles.Heading}>
                Experience
            </Typography>
            {Experiences &&
                Experiences.map((experience, i) => (
                    <Stack key={i} direction='row' sx={styles.ExprienceBox}>
                        <Box sx={styles.JobRole}>
                            <Typography variant='h6' component='h6'>
                                {experience.as}
                            </Typography>
                            <Typography variant='body1' component='span'>
                                {experience.subtitle}
                            </Typography>
                            <Typography variant='body1' component='p'>
                                {experience.range}
                            </Typography>
                            <ButtonBase sx={styles.Buttons}>
                                {experience.time}
                            </ButtonBase>
                        </Box>
                        <Box sx={styles.JobComapanyInfo}>
                            <Typography variant='h6' component='h6'>
                                {experience.company}
                            </Typography>
                            <Typography variant='body1' component='p'>
                                {experience.details}
                            </Typography>
                        </Box>
                    </Stack>
                ))
            }
        </Box>
    );
};
export default Exprience;