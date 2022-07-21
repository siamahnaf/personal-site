import { Box, Typography } from '@mui/material';
import { Link } from 'react-scroll';

//Styles
import styles from 'Styles/Header/Logo.styles';

const Logo = () => {
    return (
        <Box sx={styles.Logo}>
            <Link to='home' spy={true} smooth={true}>
                <Typography variant='h3' component='h3'>
                    S
                </Typography>
            </Link>
        </Box>
    );
};
export default Logo;