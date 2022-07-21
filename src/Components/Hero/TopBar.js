import { useState, useEffect } from 'react';
import { Stack, Box, NoSsr, FormControlLabel, Switch, Typography, ButtonBase, SwipeableDrawer, SvgIcon, Link as Anchor } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';
import useDarkMode from 'use-dark-mode';
import { useTheme } from '@mui/material/styles';

//Data
import Contacts from 'Data/Hero/Contacts.data';

//DrwerData
import Navs from 'Data/Header/Nav.data';

//Styles
import styles from 'Styles/Hero/TopBar.styles';

const TopBar = () => {
    const theme = useTheme();
    const [drawer, setDrawer] = useState(false);
    const [scroll, setScroll] = useState(false);
    const { toggle: toggleDarkMode } = useDarkMode();
    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setDrawer(open);
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    return (
        <Box>
            <Stack direction='row' className={scroll ? 'sticky' : ''} sx={styles.Container}>
                <Box sx={styles.MobileBar}>
                    <ButtonBase onClick={toggleDrawer(true)}>
                        <Icon icon='uim:bars' />
                    </ButtonBase>
                </Box>
                <Box sx={styles.TopBar}>
                    <Anchor href={`tel:${Contacts.phone.replace('-', '').replace(' ', '')}`}>
                        <Icon icon='eva:phone-fill' />
                        <Typography variant='body1' component='span'>
                            {Contacts.phone}
                        </Typography>
                    </Anchor>
                </Box>
                <Box sx={{
                    flex: 1,
                    ...styles.TopBar,
                    svg: {
                        fontSize: {
                            msm: '18px !important',
                            xxs: '20px !important'
                        },
                        mb: {
                            msm: '-3.5px !important',
                            xxs: '-4px !important'
                        },
                    }
                }}>
                    <Anchor href={`mailto:${Contacts.email.replace('-', '').replace(' ', '').trim()}`}>
                        <Icon icon='fluent:mail-unread-28-filled' />
                        <Typography variant='body1' component='span'>
                            {Contacts.email}
                        </Typography>
                    </Anchor>
                </Box>
                <Box>
                    <NoSsr>
                        <FormControlLabel
                            control={<MaterialUISwitch sx={{ m: 1 }} checked={theme.palette.mode === 'dark' ? false : true} />}
                            label=''
                            onClick={toggleDarkMode}
                            sx={{
                                m: '0px',
                                '& .MuiSwitch-root': {
                                    m: '0',
                                    mr: '-8px'
                                }
                            }}
                        />
                    </NoSsr>
                </Box>
            </Stack>
            <Box sx={styles.DrawerContainer}>
                <SwipeableDrawer
                    anchor='left'
                    open={drawer}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    sx={styles.Drawer}
                >
                    <Typography variant='h5' component='h5' sx={styles.DrawerLogo}>
                        S
                        <ButtonBase onClick={toggleDrawer(false)} sx={styles.CloseIcon}>
                            <Icon icon='majesticons:close-line' />
                        </ButtonBase>
                    </Typography>
                    <Box sx={styles.Navigation}>
                        {Navs &&
                            Navs.map((nav, i) => (
                                <ButtonBase key={i}>
                                    <Link
                                        onClick={toggleDrawer(false)}
                                        activeClass='active'
                                        to={nav.path}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        <Typography variant='body1' component='p'>
                                            <SvgIcon viewBox={nav.viewbox}>
                                                {nav.icon}
                                            </SvgIcon>
                                            {nav.title}
                                        </Typography>
                                    </Link>
                                </ButtonBase>
                            ))
                        }
                    </Box>
                </SwipeableDrawer>
            </Box>
        </Box>
    );
};
export default TopBar;

// Custom component with styles
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.primary.pure_white,
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#000',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));