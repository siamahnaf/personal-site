const styles = {
    HeroContent: {
        pt: {
            md: '135px',
            smd: '100px',
            msm: '80px',
            xxs: '90px'
        },
        pb: {
            xxl: '230px',
            xl: '185px',
            lg: '175px',
            smd: '40px',
            sm: '30px',
            xxs: '40px'
        },
        h6: {
            fontSize: '20px',
            mb: '10px',
        },
        h2: {
            fontSize: {
                md: '80px',
                smd: '50px',
                lsm: '45px',
                msm: '40px',
                sm: '60px',
                xs: '50px',
                xxs: '45px'
            },
            fontWeight: 600,
            ml: {
                md: '-8px',
                smd: '-4px',
                msm: '-2px',
                xxs: '-3px'
            },
            mb: '9px',
        }
    },
    TextLoops: {
        h5: {
            fontWeight: 500,
            color: 'primary.main'
        }
    },
    Description: {
        mt: '15px',
        mb: '2rem'
    },
    Button: {
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