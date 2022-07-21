const styles = {
    ServiceBox: {
        backgroundColor: 'primary.card_bg',
        m: '0 5px',
        p: '15px 15px',
        borderRadius: '10px',
        boxShadow: theme => `0 0 20px ${theme.palette.primary.box_shadow}`,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
            content: '""',
            width: {
                lg: '180px',
                md: '170px',
                msm: '180px',
                sm: '170px',
                xs: '165px',
                xxs: '160px'
            },
            height: {
                lg: '180px',
                md: '170px',
                msm: '180px',
                sm: '170px',
                xs: '165px',
                xxs: '160px'
            },
            position: 'absolute',
            backgroundColor: 'primary.main',
            top: '-72px',
            left: '-40px',
            borderRadius: '50%',
        }
    },
    Icon: {
        fontSize: {
            lg: '4rem',
            md: '3.5rem',
            lsm: '4rem',
            msm: '4rem',
            sm: '3.5rem',
            xs: '3.2rem',
            xxs: '3rem'
        },
        color: 'primary.light',
        mb: '4rem',
        position: 'relative',
        zIndex: '1'
    },
    ServiceContent: {
        px: {
            lg: '1.5rem',
            md: '5px',
            lsm: '10px',
            xxs: '5px'
        },
        position: 'relative',
        h5: {
            fontSize: {
                lg: '20px',
                md: '18px',
                lsm: '20px',
                sm: '22px',
                xs: '20px',
                xxs: '18px'
            },
            mb: '10px',
            fontWeight: 500
        },
        '& p': {
            mb: '5px',
            fontSize: {
                lg: '1rem',
                md: '15px',
                xxs: '1rem'
            }
        }
    }
};
// Export
export default styles;