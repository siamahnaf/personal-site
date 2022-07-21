import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { Icon } from '@iconify/react';

//Data
import Socials from 'Data/Footer/Socials.data';

//Styles
import styles from 'Styles/Footer/Social.styles';

const Social = () => {
    return (
        <Box>
            <Typography variant='h6' component='h6' sx={styles.SocialHeading}>
                Let&apos;s Connect
            </Typography>
            {Socials &&
                Socials.map((social, i) => (
                    <Box sx={styles.SingleSocial} key={i}>
                        <Link href={social.url}>
                            <a>
                                <Stack direction='row' sx={{ alignItems: 'center' }}>
                                    <Box className='css-hover-icon' sx={styles.IconBox}>
                                        <Icon icon={social.icon} />
                                    </Box>
                                    <Typography variant='body1' component='p'>
                                        {social.name}
                                    </Typography>
                                </Stack>
                            </a>
                        </Link>
                    </Box>
                ))
            }
        </Box>
    );
};
export default Social;