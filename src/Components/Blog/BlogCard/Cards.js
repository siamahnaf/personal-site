import { Box, Typography, ButtonBase } from '@mui/material';
import { Icon } from '@iconify/react';

//Styles
import styles from 'Styles/Blog/Cards.styles';

const Cards = ({ blog, setOpen, id }) => {
    const handleOpen = (index) => {
        setOpen(index);
        const header = document.querySelector('header');
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        header.style.width = `calc(6% - ${(scrollBarWidth * 6) / 100}px)`
    };
    return (
        <Box sx={styles.Card}>
            <Box>
                <Box component='img' src={blog.image} sx={styles.CardImage} alt='Blog' />
            </Box>
            <Box sx={{ position: 'relative', px: '15px', pt: "20px", pb: "45px" }}>
                <Typography variant='body1' component='p' sx={styles.BlogTimeAndDate}>
                    {blog.time}
                </Typography>
                <Typography variant='body1' component='p' sx={styles.BlogCategory}>
                    <Icon icon='clarity:tag-solid-badged' />
                    {blog.category}
                </Typography>
                <Typography gutterBottom variant='h6' component='h6' sx={styles.BlogTitle}>
                    {blog.title}
                </Typography>
                <Typography variant='body1' component='p' sx={styles.BlogDescription}>
                    {blog.strategy}
                </Typography>
                <ButtonBase onClick={() => handleOpen(id)} sx={styles.ReadMoreBtn}>
                    Read More
                </ButtonBase>
            </Box>
        </Box>
    );
};
export default Cards;