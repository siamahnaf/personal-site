import { Box, Typography, ButtonBase } from '@mui/material';

//Styles
import styles from 'Styles/Blog/Blogtitle.styles';

const BlogTitle = () => {
    return (
        <Box>
            <Typography variant='body1' component='p' sx={styles.TopTilte}>
                Blog
            </Typography>
            <Typography variant='h2' component='h2' sx={styles.BigText}>
                The Noble Science Behind most Developing Advice
            </Typography>
            <ButtonBase sx={styles.Buttons}>
                Continue Scrolling
            </ButtonBase>
        </Box>
    );
};
export default BlogTitle;