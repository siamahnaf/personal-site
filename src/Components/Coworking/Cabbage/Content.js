import { Box, Typography } from '@mui/material';

//Styles
import styles from 'Styles/Coworking/Cabbage/Content.styles';

const Content = () => {
    return (
        <Box>
            <Typography variant='h6' component="h6" sx={styles.Title}>
                Web Based Tutorial
            </Typography>
            <Box sx={styles.Text}>
                <Typography variant='body1' component='p'>
                    Cabbage is a fearless programming platform. Here you can find web-based tutorials and full web development courses.
                </Typography>
                <Typography variant='body1' component='p'>
                    Programming is the best in-demand job in the world. Web programming is also another field to create life easier. And make money by working less than an hour more and more. Freelancing is one of them.
                </Typography>
                <Typography variant='body1' component='p'>
                    We are here to learn you all the types of programming you want to learn.Stay with us and make the day happier.
                </Typography>
            </Box>
        </Box>
    );
};
export default Content;