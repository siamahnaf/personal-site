import { Box } from '@mui/material';

//Components
import Logo from 'Components/Header/Logo';
import Nav from 'Components/Header/Nav';

//Styles
import styles from 'Styles/Header/Header.styles';

const Header = () => {
    return (
        <Box component='header' sx={styles.Header}>
            <Box>
                <Logo />
            </Box>
            <Box sx={styles.Navigation}>
                <Nav />
            </Box>
        </Box>
    );
};
export default Header;