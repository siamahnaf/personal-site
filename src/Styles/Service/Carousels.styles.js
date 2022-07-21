const styles = {
    Embla: {
        overflow: 'hidden',
        pr: {
            msm: '20px',
            xxs: '0px'
        },
    },
    EmblaContainer: {
        display: 'flex'
    },
    EmblaSlide: {
        position: 'relative',
        flex: '0 0 100%',
        m: '0 10px'
    },
    ImageBox: {
        flex: {
            smd: '0 0 30%',
            lsm: '0 0 35%',
            msm: '0 0 40%',
            xxs: '0 0 100%'
        },
        mr: '20px',
        img: {
            width: '100%',
            height: '100%',
            borderRadius: '3px',
            border: theme => `1px solid ${theme.palette.primary.main_light}`,
            objectFit: 'cover'
        }
    },
    ContentBox: {
        flex: {
            smd: '0 0 70%',
            lsm: '0 0 64%',
            msm: '0 0 58%',
            xxs: '0 0 100%'
        }
    },
    Title: {
        fontSize: '22px',
        mb: '8px',
        fontWeight: 500,
        color: 'primary.main'
    },
    Paragraph: {
        fontSize: '16px',
        mb: '15px',
        fontWeight: 300
    },
    DemoUrl: {
        mb: '15px',
        svg: {
            mr: '8px',
            mt: '6px',
            fontSize: '18px',
            color: 'primary.main',
            transition: '0.2s ease',
        },
        a: {
            textDecoration: 'none',
            fontWeight: '400',
            fontSize: {
                sm: '18px',
                xxs: '16px'
            },
            color: 'text.primary',
            transition: '0.2s ease',
        },
        '&:hover': {
            svg: {
                color: 'text.primary',
            },
            a: {
                color: 'primary.main',
            }
        }
    },
    Divider: {
        backgroundColor: 'primary.main_light',
        mb: '15px'
    },
    FeaturesTitle: {
        mb: '8px',
        fontSize: '16px',
        fontWeight: 400,
    },
    Icons: {
        fontSize: '18px',
        mr: '8px',
        mt: '2px',
        color: 'primary.main',
        path: {
            fill: theme => theme.palette.primary.main
        }
    },
    featureText: {
        fontSize: '14px',
    },
    Navigation: {
        position: 'absolute',
        top: {
            lsm: '-12%',
            msm: '-10%',
            sm: '-6%',
            xxs: '-5%'
        },
        right: '2%',
        button: {
            backgroundColor: 'primary.main',
            ml: '5px',
            borderRadius: '50%',
            p: '1px',
            color: 'primary.light',
            svg: {
                fontSize: '20px',
            },
            '&.disable': {
                opacity: '0.6',
            }
        }
    },
    DotNavigation: {
        position: 'absolute',
        bottom: {
            msm: '-10%',
            sm: '-5%',
            xxs: '-3%'
        },
        left: '50%',
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap',
        button: {
            borderRadius: '50%',
            m: '0 2px',
            p: {
                md: '5px',
                sm: '4px',
                xxs: '3.5px'
            },
            border: theme => `2px solid ${theme.palette.primary.main}`,
            position: 'relative',
            '&:after': {
                content: '""',
                width: ' ',
                p: {
                    md: '3px',
                    sm: '2px',
                    xxs: '2.5px'
                },
                backgroundColor: 'primary.main',
                position: 'absolute',
                borderRadius: '50%',
                transform: 'scale(0)',
                transition: '0.3s ease'
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