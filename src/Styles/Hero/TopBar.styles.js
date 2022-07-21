const styles = {
    Container: {
        position: {
            md: 'absolute',
            xxs: 'fixed'
        },
        top: 0,
        left: 0,
        width: '100%',
        py: '10px',
        alignItems: 'center',
        zIndex: {
            md: '99',
            xxs: '9999'
        },
        pl: {
            md: 'unset',
            msm: '2%',
            sm: '1.3%',
            xs: '1%',
            xxs: '0.3%'
        },
        pr: {
            md: 'unset',
            msm: '2%',
            sm: '1.3%',
            xxs: '1.5%'
        },
        '&.sticky': {
            backgroundColor: {
                md: 'transparent',
                xxs: 'primary.card_bg'
            },
            boxShadow: theme => `0 0 20px ${theme.palette.primary.box_shadow}`
        }

    },
    TopBar: {
        a: {
            fontSize: '15px',
            fontWeight: 400,
            transition: '0.2s ease',
            textDecoration: 'none',
            mr: {
                msm: '50px',
                xxs: '12px'
            },
            color: 'text.primary',
            svg: {
                color: 'primary.main',
                fontSize: {
                    msm: '15px',
                    xxs: '18px'
                },
                mr: '6px',
                mb: {
                    msm: '-2px',
                    xxs: '-3px'
                },
                transition: '0.2s ease'
            },
            span: {
                display: {
                    msm: 'unset',
                    xxs: 'none'
                }
            },
            '&:hover': {
                color: 'primary.main',
                svg: {
                    color: 'text.primary',
                }
            }
        },
    },
    MobileBar: {
        mr: {
            msm: '20px',
            xxs: '10px'
        },
        display: {
            md: 'none',
            xxs: 'block'
        },
        button: {
            p: '2px 5.5px',
            svg: {
                fontSize: '22px'
            },
        }
    },
    DrawerContainer: {
        display: 'none',
    },
    Drawer: {
        zIndex: '9999999999',
        '& .MuiDrawer-paper': {
            width: {
                msm: '300px',
                sm: '280px',
                xs: '250px',
                xxs: '220px'
            },
            backgroundColor: 'primary.card_bg'
        }
    },
    DrawerLogo: {
        backgroundColor: 'primary.main',
        textAlign: 'center',
        py: '15px',
        fontSize: '110px',
        fontWeight: 400,
        color: 'primary.light',
        position: 'relative'
    },
    CloseIcon: {
        position: 'absolute',
        right: '2%',
        top: '2%',
        fontSize: '22px',
        p: '5px'
    },
    Navigation: {
        p: '20px',
        button: {
            display: 'block',
            width: '100%',
            textAlign: 'left',
            p: '5px 10px',
            my: '5px',
            svg: {
                fontSize: '20px',
                mr: '6px',
                mb: '-4px'
            }
        }
    }
};
// Export
export default styles;