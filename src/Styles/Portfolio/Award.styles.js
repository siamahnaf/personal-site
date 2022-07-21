import CounterBg from 'Assets/counter-bg.jpg';

const styles = {
    AwardsContainer: {
        background:
            `linear-gradient(135deg, #101130e8, #101130e8), url('${CounterBg}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        color: 'primary.light',
        mt: '3rem',
        py: '4rem',
        borderRadius: '8px'
    },
    Awards: {
        textAlign: 'center',
        h4: {
            fontSize: '3.75rem',
            fontWeight: 600,
            color: 'primary.main'
        },
        '& p': {
            fontSize: '18px'
        }
    }
};
// Export
export default styles;