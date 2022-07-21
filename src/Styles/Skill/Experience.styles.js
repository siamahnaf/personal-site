const styles = {
    Heading: {
        fontWeight: 400,
        mb: '2rem',
    },
    ExprienceBox: {
        backgroundColor: 'primary.card_bg',
        mb: '1rem',
        p: '1.4rem',
        borderRadius: '5px',
        boxShadow: theme => `0 0 20px ${theme.palette.primary.box_shadow}`,
        flexWrap: {
            msm: 'unset',
            xxs: 'wrap'
        }
    },
    JobRole: {
        flex: {
            lg: '0 0 25%',
            md: '0 0 28%',
            msm: '0 0 35%',
            xxs: '0 0 100%'
        },
        mr: {
            smd: 'unset',
            lsm: '25px',
            msm: '15px',
            xxs: '0px'
        },
        mb: {
            msm: '0px',
            xxs: '25px'
        },
        h6: {
            fontSize: '18px',
            fontWeight: 500,
            mb: '5px'
        },
        span: {
            fontSize: '16px',
            fontStyle: 'italic'
        },
        '& p': {
            fontSize: '15px',
            mb: '8px',
            mt: '5px'
        }
    },
    Buttons: {
        p: '8px 10px',
        fontSize: '13px',
        fontWeight: 600,
        backgroundColor: 'primary.main',
        color: 'primary.light'
    },
    JobComapanyInfo: {
        flex: {
            lg: '0 0 75%',
            md: '0 0 72%',
            smd: '0 0 65%',
            msm: '0 0 62%',
            xxs: '0 0 100%'
        },
        h6: {
            fontSize: '22px',
            fontWeight: 500,
            mb: '5px'
        },
        '& p': {
            fontWeight: 300,
        }
    }
};
// Export
export default styles;