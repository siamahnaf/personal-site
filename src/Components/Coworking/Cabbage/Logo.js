import { Box, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

//Cabbage Logo
import Cabbage from 'Assets/cabbage.png';

//Styles
import styles from 'Styles/Coworking/Cabbage/Logo.styles';

const Logo = () => {
    return (
        <Box sx={styles.Container}>
            <Box sx={styles.CabbageLogo} className="sdgsxdf">
                <Box component='img' src={Cabbage} alt='Cabbage' />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <ButtonBase sx={styles.Button}>
                    <Link href="https://www.youtube.com/channel/UCenJabtn62vOv0ZDMIWYYkQ">
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