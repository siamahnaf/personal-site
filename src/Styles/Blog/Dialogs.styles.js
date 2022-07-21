const styles = {
    DialogTitle: {
        display: 'flex',
        py: '10px',
        boxShadow: theme => `0 0 20px ${theme.palette.primary.box_shadow}`
    },
    TitleIcon: {
        mt: '5px',
        fontSize: '22px',
        mr: '5px',
    },
    BlogTitle: {
        flex: 1,
        fontWeight: 400,
    },
    BlogImage: {
        width: '100%',
        height: {
            xxl: '650px',
            xl: '550px',
            lg: '450px'
        },
        borderRadius: '5px',
        objectFit: 'cover',
    },
    AboutBox: {
        textAlign: 'center',
        h6: {
            fontWeight: 400,
            fontSize: '18px'
        },
        '& p': {
            fontSize: '15px',
            svg: {
                mb: '-4px',
                mr: '5px',
                color: 'primary.main'
            }
        }
    },
    AboutStratgy: {
        mt: '35px',
        fontStyle: 'italic',
        fontWeight: 300,
        mb: '15px',
    },
    AboutMeImage: {
        width: '110px',
        height: '110px',
        borderRadius: '10px',
        objectFit: 'cover',
        objectPosition: 'center'
    },
    AboutReferrence: {
        width: 'max-content',
        a: {
            fontStyle: 'italic',
            textDecoration: 'none',
            fontWeight: 300,
            color: 'text.primary',
            svg: {
                mb: '-5px',
                mr: '5px',
                color: 'primary.main',
                fontSize: '20px'
            }
        }
    },
    BlogDescription: {
        mt: '1.5rem',
        lineHeight: 1.6,
        letterSpacing: '0.3px',
        pre: {
            overflow: "auto",
            bgcolor: "primary.codebg",
            color: "primary.light",
            p: "5px",
            mb: "5px",
            borderRadius: "3px",
            scrollbarWidth: "thin"
        }
    }
};
// Export
export default styles;