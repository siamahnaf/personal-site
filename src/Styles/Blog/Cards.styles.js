const styles = {
    Card: {
        backgroundColor: 'primary.card_bg',
        boxShadow: '0 0 20px #10113029',
        borderRadius: '10px'
    },
    CardImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '10px 10px 0 0'
    },
    BlogTimeAndDate: {
        position: 'absolute',
        top: '-50px',
        left: '5%',
        backgroundColor: 'primary.main',
        p: '3px 10px',
        borderRadius: '3px',
        color: 'primary.light'
    },
    BlogCategory: {
        svg: {
            mb: '-3px',
            mr: '5px',
            color: 'primary.main'
        }
    },
    BlogTitle: {
        fontWeight: 400,
    },
    BlogDescription: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        WebkitLineClamp: '2',
        fontWeight: 300,
    },
    ReadMoreBtn: {
        mt: '10px',
        p: '5px 10px',
        ml: '-9px',
    }
};
// Export
export default styles;