const styles = {
    Embla: {
        overflowX: 'hidden',
        p: '12px',
    },
    EmblaViewPort: {
        '&.is-draggable': {
            cursor: 'grab'
        },
        '&.is-dragging': {
            cursor: 'grabbing'
        }
    },
    EmblaContainer: {
        display: 'flex'
    },
    EmblaSlide: {
        position: 'relative',
        flex: {
            xxl: '0 0 25%',
            xl: '0 0 30%',
            lg: '0 0 40%',
            md: '0 0 50%',
            smd: '0 0 40%',
            lsm: '0 0 45%',
            msm: '0 0 52%',
            sm: '0 0 60%',
            xxs: '0 0 90%',
        },
        m: '0 8px'
    },
    NavigationContainer: {
        position: 'absolute',
        bottom: '-1%',
        backgroundColor: 'primary.card_bg',
        left: {
            xxl: '26%',
            xl: '32%',
            lg: '42%',
            md: '50%',
            lsm: '42%',
            msm: '52%',
            sm: '55%',
            xxs: '50%'
        },
        transform: 'translateX(-50%)',
        borderRadius: '35px',
        boxShadow: theme => `2px 2px 20px ${theme.palette.primary.main_box_shadow}`,
        p: '12px 18px',
        overflow: 'hidden'
    },
    ProgressContainer: {
        position: 'absolute',
        transform: 'translateX(26%) rotate(-70deg)',
        bottom: '11px',
        width: '67%'
    },
    Progress: {
        position: 'relative',
        backgroundColor: 'primary.main_light',
        width: '100%',
        height: '4px',
        overflow: 'hidden',
        borderRadius: '5px',
        flex: 1,
    },
    PrgressBar: {
        position: 'absolute',
        backgroundColor: 'primary.main',
        width: '100%',
        top: '0',
        bottom: '0',
        left: '-100%'
    },
    ArrowButton: {
        position: "relative",
        button: {
            mx: "8px",
            p: "3px 5px",
            transition: "0.2s ease",
            svg: {
                fontSize: "18px",
                transition: "0.2s ease"
            },
            "&:hover": {
                svg: {
                    color: "primary.main"
                }
            },
            "&.disable": {
                opacity: "0.5"
            }
        }
    }
};
// Export
export default styles;