const styles = {
    RoadMapButton: {
        backgroundColor: 'text.primary',
        color: 'background.default',
        p: {
            xs: '0 12px',
            xxs: '0 8px'
        },
        maxHeight: '30px',
        minHeight: '30px',
        mr: '10px',
        fontWeight: 400,
        fontSize: '13px',
        letterSpacing: '0.5px',
        position: 'relative',
        overflow: 'unset',
        '&:after': {
            content: '""',
            position: 'absolute',
            left: '10%',
            bottom: '-12px',
            border: '6px solid transparent',
            borderTopColor: 'primary.main',
            zIndex: '-1',
            opacity: 0,
            transform: 'translateY(-7px)',
            transition: 'transform 0.3s ease'
        },
        '&.Mui-selected': {
            backgroundColor: 'primary.main',
            color: 'primary.light',
            '&:after': {
                transform: 'translateY(0px)',
                opacity: 1,
            }
        }
    },
    JourneyContainer: {
        backgroundColor: 'primary.main',
        p: '20px 15px',
        borderRadius: '5px',
        color: 'primary.light',
        position: 'relative',
        mb: '2rem',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '3px',
            backgroundColor: 'primary.light',
            top: ' 20px',
            bottom: '20px',
            left: {
                xxl: '13%',
                xl: '14.5%',
                lg: '16%',
                md: '17%',
                smd: '13%',
                lsm: '16%',
                msm: '16.5%',
                sm: '18.5%',
                xs: '21%',
                xxs: '25%'
            },
            borderRadius: '8px'
        }
    },
    SingleJourney: {
        alignItems: ' center',
        mb: '25px',
        cursor: 'pointer',
        '&:last-child': {
            mb: 0,
        },
        '&:hover': {
            '& span': {
                transform: {
                    sm: 'translate(10px, -3px)',
                    xs: 'translate(5px, -3px)',
                    xxs: 'translate(4px, -3px)'
                },
                color: 'primary.dark'
            },
            '& p': {
                transform: {
                    sm: 'translate(-10px, -3px)',
                    xs: 'translate(-5px, -3px)',
                    xxs: 'translate(-4px, -3px)'
                }
            }
        }
    },
    JourneyLeft: {
        flex: {
            xl: '0 0 15%',
            lg: '0 0 12%',
            md: '0 0 10%',
            smd: '0 0 15%',
            msm: '0 0 20%',
            sm: '0 0 22%',
            xs: '0 0 25%',
            xxs: '0 0 30%'
        },
        mr: {
            xl: '12px',
            md: '35px'
        },
        fontSize: {
            lg: '25px',
            md: '18px',
            lsm: '25px',
            msm: '23px',
            sm: '21px',
            xs: '18px',
            xxs: '17px'
        },
        transition: '0.25s ease-out',
    },
    JourneyParagraph: {
        flex: {
            xl: '0 0 85%',
            md: '0 0 84%',
            msm: '0 0 80%',
            sx: '0 0 78%',
            xxs: '0 0 70%'
        },
        fontSize: '16px',
        lineHeight: '1.5',
        transition: '0.25s ease-out',
        span: {
            fontSize: '14px',
            fontWeight: 600,
            transition: '0.25s ease-out'
        }
    },
    EducationContainer: {
        position: ' relative',
        mb: '2rem',
        '&:after': {
            content: '""',
            backgroundColor: 'primary.main',
            position: 'absolute',
            top: '15px',
            bottom: '15px',
            width: '3px',
            left: {
                lg: '16%',
                md: '18%',
                sm: '16%',
                xs: '23%',
                xxs: '26%'
            },
            zIndex: '-1',
            transform: {
                lg: 'translateX(-66%)',
                md: 'translateX(-68%)',
                sm: 'translateX(-66%)',
                xs: 'translateX(-73%)',
                xxs: 'translateX(-76%)'
            }
        }
    },
    SingleEducations: {
        alignItems: 'center',
        mb: '15px',
        cursor: 'pointer',
        '&:hover': {
            svg: {
                backgroundColor: 'primary.pure_white',
                color: 'background.default'
            },
            '& .css-523ht4-text': {
                transform: {
                    lg: 'translate(12px, -2px)',
                    md: 'translate(5px, -2px)',
                    msm: 'translate(12px, -2px)',
                    sm: 'translate(8px, -2px)',
                    xs: 'translate(5px, -2px)',
                    xxs: 'translate(4px, -2px)'
                }
            },
            '& .css-73hy74-box': {
                transform: {
                    lg: 'translate(-12px, -2px)',
                    md: 'translate(-5px, -2px)',
                    msm: 'translate(-12px, -2px)',
                    sm: 'translate(-8px, -2px)',
                    xs: 'translate(-5px, -2px)',
                    xxs: 'translate(-4px, -2px)'
                }
            }
        }
    },
    EducationText: {
        flex: {
            lg: '0 0 10%',
            md: '0 0 12%',
            msm: '0 0 10%',
            sm: '0 0 10%',
            xs: '0 0 14%',
            xxs: '0 0 15%'
        },
        transition: '0.15s ease-out',
        h6: {
            fontSize: {
                lg: '22px',
                md: '20px',
                msm: '22px',
                sm: '20px',
                xs: '18px',
                xxs: '17px'
            },
        }
    },
    Icons: {
        flex: {
            sm: '0 0 12%',
            xs: '0 0 18%',
            xxs: '0 0 22%'
        },
        textAlign: 'center',
        svg: {
            backgroundColor: 'primary.main',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            p: '5px',
            color: 'primary.light'
        }
    },
    EducationParagraph: {
        flex: {
            lg: '0 0 78%',
            md: '0 0 76%',
            sm: '0 0 78%',
            xs: '0 0 68%',
            xxs: '0 0 63%'
        },
        transition: '0.15s ease-out',
        h6: {
            fontSize: {
                lg: '22px',
                msm: '20px',
                xs: '18px',
                xxs: '16px'
            },
            fontWeight: 400,
            span: {
                fontSize: '16px',
                color: 'primary.main',
            }
        },
        p: {
            fontSize: '16px',
            mt: '3px',
            span: {
                color: 'primary.main',
                fontSize: '15px',
            }
        }
    },
    ContactButton: {
        mb: {
            md: '3em',
            xxs: '0rem'
        },
        backgroundColor: 'text.primary',
        p: '10px 15px',
        fontSize: '16px',
        borderRadius: '5px',
        color: 'background.default',
        fontWeight: 500,
        border: '1px solid transparent',
        transition: '0.2s ease',
        '&:hover': {
            color: 'text.primary',
            backgroundColor: 'background.default',
            borderColor: 'text.primary',
            transform: 'translateY(-3px)'
        }
    }
};
// Export
export default styles;