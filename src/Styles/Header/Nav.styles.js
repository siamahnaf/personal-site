const styles = {
    NavMenu: {
        a: {
            display: 'table',
            width: '100%',
            py: '11px',
            transition: '0.3s ease',
            borderBottom: theme => `1px solid ${theme.palette.primary.border_color}`,
            cursor: 'pointer',
            svg: {
                fontSize: '25px'
            },
            '&.active': {
                color: 'primary.main'
            },
            '&.remove-border': {
                borderBottom: 'none',
            }
        }
    }
};
// Export
export default styles;