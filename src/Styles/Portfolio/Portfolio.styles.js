const styles = {
    SubHeader: {
        textAlign: 'right',
        fontSize: '18px'
    },
    selectedButton: {
        fontSize: "18px",
        fontWeight: 400,
        width: "max-content",
        p: "1px 15px",
        borderRadius: "5px",
        border: theme => `1px solid ${theme.palette.primary.main}`,
        my: "5px",
        ml: "auto",
        textTransform: "capitalize",
        display: {
            sm: "none",
            xxs: "block"
        }
    },
    Buttons: {
        textAlign: 'right',
        mt: '10px',
        mb: '15px',
        button: {
            backgroundColor: 'text.primary',
            color: 'background.default',
            p: {
                sm: '7px 12px',
                xxs: '10px 18px'
            },
            ml: '10px',
            position: 'relative',
            textTransform: 'uppercase',
            transition: '0.2s ease',
            mb: {
                smd: 'unset',
                xxs: '15px',
            },
            svg: {
                mr: {
                    sm: '6px',
                    xxs: '0px'
                },
                fontSize: '16px'
            },
            span: {
                fontWeight: 400,
                fontSize: '13px',
                letterSpacing: '0.3px',
                display: {
                    sm: 'block',
                    xxs: "none"
                }
            },
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
            '&.active': {
                backgroundColor: 'primary.main',
                color: 'primary.light',
                '&:after': {
                    transform: 'translateY(0px)',
                    opacity: 1,
                }
            },
            '&:hover': {
                backgroundColor: 'primary.main',
                color: 'primary.light',
            }
        }
    },
    Card: {
        position: 'relative',
        height: '100%',
        cursor: 'zoom-in',
        '&:after, &:before': {
            content: '""',
            backgroundColor: 'primary.dark',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            transform: 'scale(0)',
            transition: 'all 0.4s ease 0s',
            borderRadius: '5px'
        },
        '&:after': {
            border: theme => `1px solid ${theme.palette.primary.white_border}`,
            top: '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            transition: 'all 0.4s ease 0.2s'
        },
        '&:hover': {
            '&:before': {
                opacity: 0.5,
                transform: 'scale(1)'
            },
            '&:after': {
                opacity: 0.35,
                transform: 'scale(1)'
            },
            '& .css-mn3uyd-hover': {
                filter: 'blur(0)',
                opacity: 1,
            },
            '& .css-ufn734rby-hovicon': {
                transform: 'translate(-50%, 235%)',
                opacity: 1
            }
        }
    },
    CardImage: {
        borderRadius: '5px',
        width: '100%',
        height: '100%'
    },
    CardContent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'primary.light',
        filter: 'blur(5px)',
        opacity: 0,
        zIndex: '9',
        transition: 'all 0.4s ease 0.3s',
        whiteSpace: 'nowrap',
        h6: {
            fontSize: '20px',
            fontWeight: 400,
            letterSpacing: '0.5px'
        },
        '& p': {
            fontSize: '13px'
        }
    },
    CardIcons: {
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 300%)',
        bottom: '50%',
        opacity: 0,
        zIndex: 99,
        transition: 'all 0.3s ease 0.3s',
        fontSize: '25px',
        color: 'primary.main_light',
        width: '100%'
    },
    OpenedCard: {
        height: '100%',
        position: 'relative',
        borderRadius: '5px',
        '&:after': {
            content: '""',
            background: theme => `linear-gradient(135deg, ${theme.palette.primary.dark} 15%, ${theme.palette.primary.dark} 15%, transparent)`,
            position: 'absolute',
            borderRadius: '5px',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0'
        }
    },
    CardOpenedImage: {
        borderRadius: '5px',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    CardOpenedContent: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: {
            smd: '40em',
            lsm: '35em',
            msm: '32em',
            sm: '28em',
            xs: '20em',
            xxs: '18em'
        },
        color: 'primary.light',
        zIndex: '99',
        p: '15px 20px'
    },
    OpenedCardTitle: {
        fontWeight: '400',
        mb: '5px',
    },
    CardLink: {
        mb: '5px',
        svg: {
            fontSize: '16px',
            mr: '5px',
            mt: '2px',
            color: 'primary.main',
        },
        a: {
            fontSize: '15px',
            color: 'primary.light',
            textDecoration: 'none'
        }
    },
    CardParagraph: {
        fontSize: '15px',
        fontWeight: 300,
        mt: '10px'
    },
    CloseButton: {
        color: 'primary.light',
        position: 'absolute',
        right: '6px',
        top: '6px',
        fontSize: '25px',
        zIndex: '99',
        p: '3px'
    }
};
// Export
export default styles;