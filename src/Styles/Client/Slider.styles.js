const styles = {
    Container: {
        mt: {
            sm: '5rem',
            xxs: '7rem'
        },
        mx: {
            md: '6rem',
            lsm: '2rem',
            msm: '1.5rem',
            xxs: '0rem'
        },
        position: 'relative'
    },
    Embla: {
        overflow: 'hidden'
    },
    EmblaContainer: {
        display: 'flex'
    },
    EmblaSlide: {
        position: 'relative',
        flex: '0 0 100%',
        backgroundColor: 'primary.slider_bg',
        textAlign: 'center',
        borderRadius: '8px',
        position: 'relative',
        p: '5.5rem 20px 20px 20px',
        h6: {
            fontSize: '25px',
            letterSpacing: '0.4px',
            mb: '10px',
            fontWeight: 500
        },
        '& p': {
            fontSize: '16px',
            fontWeight: 300
        }
    },
    Thumb: {
        position: 'absolute',
        zIndex: 99,
        left: '50%',
        transform: 'translate(-50%, -50%) scale(0)',
        transition: '0.5s ease 0.2s',
        opacity: 0,
        '&.is-selected': {
            transform: 'translate(-50%, -50%) scale(1)',
            zIndex: 99,
            opacity: 1,
            '& .css-3dr3d4-hover': {
                opacity: 1,
                transform: 'scale(1)',
            }
        }
    },
    Star: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '35px',
        height: '35px',
        opacity: 0,
        zIndex: 9,
        fontSize: '15px',
        transform: 'scale(0)',
        backgroundColor: 'primary.main',
        color: 'primary.dark',
        transition: '0.9s ease 0.3s',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        svg: {
            fontSize: '14px',
            mb: '1.5px',
            ml: '1px'
        }
    },
    NavigateButton: {
        button: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '50px',
            color: 'primary.slider_arrow',
            transition: '0.3s ease',
            '&.nav-left': {
                left: {
                    lg: '-4.5%',
                    md: '-5.5%',
                    smd: '-6%',
                    lsm: '-7%',
                    msm: '-8%'
                }
            },
            '&.nav-right': {
                right: {
                    lg: '-4.5%',
                    md: '-5.5%',
                    smd: '-6%',
                    lsm: '-7%',
                    msm: '-8%'
                }
            },
            '&:hover': {
                color: 'primary.main',
                '&.nav-left': {
                    left: {
                        lg: '-4%',
                        md: '-5%',
                        smd: '-5.5%',
                        lsm: '-6.5%',
                        msm: '-7.5%'
                    }
                },
                '&.nav-right': {
                    right: {
                        lg: '-4%',
                        md: '-5%',
                        smd: '-5.5%',
                        lsm: '-6.5%',
                        msm: '-7.5%'
                    }
                },
            }
        },
        display: {
            msm: 'block',
            xxs: 'none'
        }
    },
    DotButtons: {
        position: 'absolute',
        bottom: '-30px',
        left: '50%',
        transform: 'translateX(-50%)',
        button: {
            p: '4px',
            borderRadius: '50%',
            m: '0px 2px',
            border: theme => `2px solid ${theme.palette.primary.main}`,
            position: 'relative',
            '&:after': {
                content: '""',
                position: 'absolute',
                transform: 'scale(0)',
                p: '3px',
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                transition: '0.3s ease',
            },
            '&.is-selected': {
                '&:after': {
                    transform: 'scale(1)',
                }
            }
        }
    }
};
// Export
export default styles;