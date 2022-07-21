const styles = {
    AboutText: {
        mb: '1.5em',
        fontSize: '18px',
        fontWeight: 300
    },
    AboutInfo: {
        label: {
            fontWeight: 600,
            mr: '4px',
            fontSize: '17px',
        },
        span: {
            fontWeight: 300,
            fontSize: '17px',
        }
    },
    Button: {
        mt: '3em',
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