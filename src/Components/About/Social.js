import { Box, Stack, Typography, ButtonBase } from '@mui/material';
import Link from 'next/link';
import { Icon } from '@iconify/react';

//Data
import Socials from 'Data/About/Social.data';

//Images
import Images from 'Assets/about-me.png';

//Styles
import styles from 'Styles/About/Social.styles';

const Social = () => {
    return (
        <Box>
            <Box sx={styles.ImageContainer}>
                <Box component='img' src={Images} alt='About Image' sx={styles.Image} />
                <Stack direction='row' sx={styles.SocialContainer}>
                    {Socials &&
                        Socials.map((social, i) => (
                            <Box key={i}>
                                <Link href={social.path}>
                                    <a target='_blank'>
                                        <ButtonBase sx={styles.SocialIcon}>
                                            <Icon icon={social.icon} />
                                        </ButtonBase>
                                    </a>
                                </Link>
                            </Box>
                        ))
                    }
                </Stack>
            </Box>
            <Box sx={styles.AboutContainer}>
                <Typography varaint='body1' component='p' sx={styles.AboutJob}>
                    MERN Stack Developer
                </Typography>
                <Typography varaint='h5' component='h5' sx={styles.AboutName}>
                    Siam Ahnaf
                </Typography>
            </Box>
        </Box>
    );
};
export default Social;