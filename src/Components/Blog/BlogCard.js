import { useState, useEffect, useCallback, forwardRef } from 'react';
import { Box, Stack, ButtonBase, Dialog, Slide, Typography } from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import { Icon } from '@iconify/react';

//Components
import Cards from './BlogCard/Cards';
import Dialogs from './BlogCard/Dialogs';

//Data
import Blogs from 'Data/Blog/Blog.data';

//Styles
import styles from 'Styles/Blog/BlogCard.styles';

const BlogCard = () => {
    const [viewportRef, embla] = useEmblaCarousel({
        containScroll: 'trimSnaps',
        dragFree: true
    }, [ClassNames()]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [open, setOpen] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    const onScroll = useCallback(() => {
        if (!embla) return;
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [embla, setScrollProgress]);

    const handleClose = () => {
        setOpen(false)
    };
    const removePadding = () => {
        const header = document.querySelector('header');
        header.style.width = '6%'
    };
    useEffect(() => {
        if (!embla) return;
        onSelect();
        onScroll();
        embla.on('select', onSelect);
        embla.on('scroll', onScroll);
    }, [embla, onSelect, onScroll]);
    return (
        <Box sx={{ position: "relative" }}>
            <Box className='embla' sx={styles.Embla}>
                <Box className='embla__viewport' ref={viewportRef} sx={styles.EmblaViewPort}>
                    <Box className='embla__container' sx={styles.EmblaContainer}>
                        {Blogs.map((blog, i) => (
                            <Box className='embla__slide' sx={styles.EmblaSlide} key={i}>
                                <Cards
                                    blog={blog}
                                    id={i}
                                    setOpen={setOpen}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.NavigationContainer}>
                <Box sx={styles.ArrowButton}>
                    <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                    <Box sx={styles.ProgressContainer} className="sfsdfgsdgf">
                        <Box sx={styles.Progress}>
                            <Box
                                sx={{ transform: `translateX(${scrollProgress}%)`, ...styles.PrgressBar }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                {Blogs &&
                    Blogs.map((blog, i) => (
                        <Dialog
                            key={i}
                            fullScreen
                            open={open === i}
                            onClose={handleClose}
                            TransitionComponent={Transition}
                            sx={{ zIndex: '99999' }}
                            TransitionProps={{
                                onExited: () => {
                                    removePadding();
                                }
                            }}
                        >
                            <Dialogs handleClose={handleClose} {...blog} />
                        </Dialog>
                    ))
                }
            </Box>
        </Box>
    );
};
export default BlogCard;
// Prev Button
const PrevButton = ({ enabled, onClick }) => (
    <ButtonBase
        onClick={onClick}
        disabled={!enabled}
        className={!enabled ? 'disable' : ''}
    >
        <Icon icon='fa-solid:long-arrow-alt-left' />
    </ButtonBase>
);
// Next Button
const NextButton = ({ enabled, onClick }) => (
    <ButtonBase
        onClick={onClick}
        disabled={!enabled}
        className={!enabled ? 'disable' : ''}
    >
        <Icon icon='fa-solid:long-arrow-alt-right' />
    </ButtonBase>
);
// Transition
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});