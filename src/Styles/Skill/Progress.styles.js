const styles = {
    Container: {
        width: {
            md: '90%',
            msm: '95%',
            xxs: '85%'
        },
        mt: {
            xxl: '2rem',
            md: '5rem',
            xxs: '2rem'
        }
    },
    Progress: {
        width: '100%',
        mb: '40px',
        position: 'relative'
    },
    Title: {
        fontSize: '18px',
    },
    ProgressValue: {
        position: 'absolute',
        border: theme => `0.125rem solid ${theme.palette.primary.progress}`,
        p: '5px 10px',
        top: '-25px',
        fontSize: '15px',
        borderRadius: '3px',
        transition: '0.8s ease',
        '&:after': {
            content: '""',
            borderStyle: 'solid',
            borderWidth: '0.3125rem 0.3125rem 0 0',
            borderColor: theme => `${theme.palette.primary.progress} transparent transparent transparent`,
            bottom: '-0.4375rem',
            position: 'absolute',
            left: '0.3125rem',
        }
    }
};
// Export
export default styles;