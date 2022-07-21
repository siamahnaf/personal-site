const styles = {
    HeroLeft: {
        flex: {
            msm: '0 0 50%',
            xxs: '0 0 100%'
        },
        pt: {
            xxl: '8rem',
            xl: '6rem',
            md: '4rem',
            xxs: '0rem'
        },
    },
    HeroRight: {
        position: 'relative',
        flex: '0 0 50%',
        textAlign: 'right',
        '& figure': {
            backgroundSize: 'contain !important',
            backgroundPosition: 'center bottom !important',
        },
        display: {
            msm: 'block',
            xxs: 'none'
        }
    }
};
// Export
export default styles;