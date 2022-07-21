import { Box, Typography } from '@mui/material';

//Styles
import styles from 'Styles/Coworking/CodeStation/Content.syles';

const Content = () => {
    return (
        <Box>
            <Typography variant='h6' component="h6" sx={styles.Title}>
                Web & Mobile Application Developing Agency
            </Typography>
            <Box sx={styles.Text}>
                <Typography variant='body1' component='p'>
                    We are codestation21, a group of people passionate about solving problems with the power of code. We have more than 4+ year professional experience in different domains and clients.
                </Typography>
                <Typography variant='body1' component='p'>
                    Our problem-solving skills help us to create a great product for you. We are always available to help your dream projects come true.
                </Typography>
            </Box>
        </Box>
    );
};
export default Content;