import { Box, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

//Cabbage Logo
import Codestations from 'Assets/codestation.png';
import CodestationsDark from 'Assets/codestation-dark.png';

//Styles
import styles from 'Styles/Coworking/CodeStation/Logo.styles';

const Logo = () => {
    const theme = useTheme();
    return (
        <Box sx={styles.Container}>
            <Box sx={styles.CabbageLogo} className="sdgsxdf">
                {theme.palette.mode === 'light' &&
                    <Box component='img' src={Codestations} alt='Cabbage' />
                }
                {theme.palette.mode === 'dark' &&
                    <Box component='img' src={CodestationsDark} alt='Cabbage' />
                }
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <ButtonBase sx={styles.Button}>
                    <Link href="https://www.codestation21.com/">
                        <a target='_blank'>
                            View Details
                        </a>
                    </Link>
                </ButtonBase>
            </Box>
        </Box>
    );
};
export default Logo;

//Custom Component
const Iframe = styled('iframe')``;