import { useState } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import VisibilitySensor from 'react-visibility-sensor';

//Data
import Progresses from 'Data/Skill/Progresses.data';

//Styles
import styles from 'Styles/Skill/Progress.styles';

const Progress = () => {
    return (
        <Box sx={styles.Container}>
            {Progresses &&
                Progresses.map((progress, i) => (
                    <VisibilitySensor key={i} offset={{ top: -80, bottom: -80 }} delayedCall>
                        {({ isVisible }) =>
                            <Box sx={styles.Progress} >
                                <Typography variant='body1' component='p' sx={styles.Title}>
                                    {progress.field}
                                </Typography>
                                <Typography variant='body1' component='span' sx={{ left: `${isVisible ? progress.parcentage - 2 : '15'}%`, ...styles.ProgressValue }}>
                                    {progress.parcentage.toString()}%
                                </Typography>
                                <LinearProgress variant='determinate' value={isVisible ? progress.parcentage : 0} sx={{ borderRadius: '5px' }} />
                            </Box>
                        }
                    </VisibilitySensor>
                ))
            }
        </Box>
    );
};
export default Progress;