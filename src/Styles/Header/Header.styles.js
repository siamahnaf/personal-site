const styles = {
    Header: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        top: 0,
        height: '100%',
        backgroundColor: 'background.default',
        width: '6%',
        zIndex: 99,
        borderRight: theme => `1px solid ${theme.palette.primary.border_color}`,
        display: {
            md: 'unset',
            xxs: 'none'
        }
    },
    Navigation: {
        py: '40px',
        textAlign: 'center'
    }
};
// Export
export default styles;