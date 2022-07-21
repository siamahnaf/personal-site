const styles = {
    SocialHeading: {
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
    SingleSocial: {
        a: {
            display: 'block',
            mb: '10px',
            width: 'max-content',
            fontSize: '17px',
            textDecoration: 'none',
            color: 'primary.foter_text',
            cursor: 'pointer',
            '&:hover': {
                '& .css-hover-icon': {
                    backgroundColor: 'primary.main',
                    transform: 'rotate(20deg)',
                    svg: {
                        color: 'primary.light'
                    }
                }
            }
        }
    },
    IconBox: {
        backgroundColor: 'primary.pure_white',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        textAlign: 'center',
        mr: '8px',
        transition: '0.3s ease',
        svg: {
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '18px',
            color: 'background.default',
            transition: '0.3s ease',
        }
    },
    LinkName: {
        fontSize: '17px',
        fontWeight: 400,
    }
};
// Export
export default styles;