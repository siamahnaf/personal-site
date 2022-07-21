const styles = {
    ImageContainer: {
        textAlign: 'center',
        position: 'relative'
    },
    Image: {
        borderRadius: '50%',
        width: {
            lg: '350px',
            md: '320px',
            msm: '350px',
            sm: '320px',
            xs: '300px',
            xxs: '250px'
        },
        height: {
            lg: '350px',
            md: '320px',
            msm: '350px',
            sm: '320px',
            xs: '300px',
            xxs: '250px'
        },
        border: theme => `5px solid ${theme.palette.primary.main}`,
        objectFit: 'cover',
        objectPosition: 'top'
    },
    SocialContainer: {
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        div: {
            '&:nth-child(1), &:nth-child(5)': {
                mt: {
                    sm: '-25px',
                    xs: '-35px',
                    xxs: '-38px'
                }
            },
            '&:nth-child(2), &:nth-child(4)': {
                mt: {
                    sm: '-5px',
                    xs: '-10px',
                    xxs: '-12px'
                }
            }
        }
    },
    SocialIcon: {
        backgroundColor: 'primary.dark',
        border: theme => `2px solid ${theme.palette.primary.light}`,
        borderRadius: '50%',
        p: '10px',
        m: '0 3px',
        color: 'primary.light',
        transition: '0.1s ease',
        svg: {
            fontSize: '18px'
        },
        '&:hover': {
            backgroundColor: 'primary.main',
            transform: 'translateY(-3px)'
        }
    },
    AboutContainer: {
        textAlign: 'center',
        mt: '1.5em',
    },
    AboutJob: {
        fontSize: '16px',
        mb: '-5px',
        fontWeight: 300
    },
    AboutName: {
        fontSize: '33px',
        fontWeight: 500
    }
};
// Export
export default styles;