const styles = {
    Container: {
        backgroundColor: 'primary.codeColor',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        textAlign: 'center',
        py: {
            msm: '30px',
            xxs: '60px'
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        whiteSpace: 'nowrap'
    },
    CabbageLogo: {
        width: '70%',
        mx: 'auto',
        mb: '30px',
        img: {
            width: '100%'
        }
    },
    Button: {
        backgroundColor: 'text.primary',
        p: '8px 15px',
        fontSize: '14px',
        borderRadius: '5px',
        color: 'background.default',
        fontWeight: 500,
        border: '1px solid transparent',
        transition: '0.2s ease',
        a: {
            textDecoration: 'none',
            color: 'background.default',
        },
        '&:hover': {
            backgroundColor: 'background.default',
            borderColor: 'text.primary',
            transform: 'translateY(-3px)',
            a: {
                color: 'text.primary',
            }
        },
    }
};

export default styles;