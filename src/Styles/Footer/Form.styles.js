const styles = {
    FormHeading: {
        fontSize: {
            md: '25px',
            smd: '22px',
            lsm: '18px',
            sm: '22px',
            xxs: '20px'
        },
        mb: '15px',
        fontWeight: 400
    },
    SubmitButton: {
        backgroundColor: 'text.primary',
        transition: '0.3s ease',
        color: 'background.default',
        p: '10px 15px',
        overflow: 'hidden',
        svg: {
            ml: '13px',
            mb: '-4px',
            fontSize: '19px',
            transition: '0.3s ease'
        },
        '&&:hover': {
            backgroundColor: 'primary.main',
            color: 'primary.light',
            svg: {
                transform: 'translateX(180%)',
                color: 'primary.light',
            }
        },
        '&.disable': {
            opacity: 0.5,
            pointerEvents: 'none'
        }
    },
    ErrorMessage: {
        svg: {
            mb: '-2px',
            mr: '5px'
        }
    }
};
// Export
export default styles;