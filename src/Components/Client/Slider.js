import { useState, useEffect, useCallback } from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

//Data
import Sliders from 'Data/Clients/Sliders.data';

//Styles
import styles from 'Styles/Client/Slider.styles';

const Slider = () => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on('select', onSelect);
    }, [embla, setScrollSnaps, onSelect]);
    return (
        <Box sx={styles.Container}>
            <Box>
                {Sliders.map((slider, i) => (
                    <Box
                        className={i === selectedIndex ? 'is-selected' : ''}
                        sx={styles.Thumb}
                        key={i}
                    >
                        <Images src={slider.image} alt='Thumb' width={130} height={130} sx={{ borderRadius: '50%' }} />
                        <Typography variant='body1' component='p' sx={styles.Star} className='css-3dr3d4-hover'>
                            {slider.star}
                            <Icon icon='fluent:star-12-filled' />
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Box className='embla' sx={styles.Embla}>
                <Box className='embla__viewport' ref={viewportRef}>
                    <Box className='embla__container' sx={styles.EmblaContainer}>
                        {Sliders.map((slider, i) => (
                            <Box className='embla__slide' key={i} sx={styles.EmblaSlide}>
                                <Typography variant='h6' component='h6'>
                                    {slider.name}
                                </Typography>
                                <Typography variant='body1' component='p'>
                                    {slider.comment} <Icon icon='noto:orange-heart' />
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.NavigateButton}>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </Box>
            <Box sx={styles.DotButtons}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </Box>
        </Box >
    );
};
export default Slider;

//Dot Button
const DotButton = ({ selected, onClick }) => (
    <ButtonBase
        className={`embla__dot ${selected ? 'is-selected' : ''}`}
        type='button'
        onClick={onClick}
    />
);
// Prev Button
const PrevButton = ({ enabled, onClick }) => (
    <ButtonBase
        onClick={onClick}
        disabled={!enabled}
        className='nav-left'
        disableRipple={true}
    >
        <Icon icon='bi:chevron-compact-left' />
    </ButtonBase>
);
// Next Button
const NextButton = ({ enabled, onClick }) => (
    <ButtonBase
        onClick={onClick}
        disabled={!enabled}
        className='nav-right'
        disableRipple={true}
    >
        <Icon icon='bi:chevron-compact-right' />
    </ButtonBase>
);
// Custom Component
const Images = styled(Image)``;