import { useState, useEffect, useCallback } from 'react';
import { Box, Stack, Typography, ButtonBase, Divider, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';

//Styles
import styles from 'Styles/Service/Carousels.styles';

const Carousels = ({ works, visible }) => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, draggable: true });
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
        <Box sx={{ position: 'relative' }}>
            <Box className='embla' sx={styles.Embla}>
                <Box className='embla__viewport' ref={visible ? viewportRef : null}>
                    <Box className='embla__container' sx={styles.EmblaContainer}>
                        {works.map((work, i) => (
                            <Box className='embla__slide' sx={styles.EmblaSlide} key={i}>
                                <Stack direction='row' sx={{ flexWrap: { msm: 'unset', xxs: 'wrap' } }}>
                                    <Box sx={styles.ImageBox}>
                                        <Box component='img' src={work.image} alt='carousel-Image' />
                                    </Box>
                                    <Box sx={styles.ContentBox}>
                                        <Typography variant='h6' component='h6' sx={styles.Title}>
                                            {work.name}
                                        </Typography>
                                        <Typography variant='body1' component='p' sx={styles.Paragraph}>
                                            {work.details}
                                        </Typography>
                                        {work.link &&
                                            <Stack direction='row' sx={styles.DemoUrl}>
                                                <Icon icon='whh:website' />
                                                <Link href={work.link}>
                                                    <a target='_blank'>
                                                        {work.displayLink}
                                                    </a>
                                                </Link>
                                            </Stack>
                                        }
                                        <Divider sx={styles.Divider} />
                                        <Grid container spacing={2}>
                                            <Grid item md={6} sm={6} xs={12}>
                                                {work.techs &&
                                                    <Typography variant='h6' component='h6' sx={styles.FeaturesTitle}>
                                                        Techs
                                                    </Typography>
                                                }
                                                {work.techs &&
                                                    work.techs.map((tech, i) => (
                                                        <Stack direction='row' key={i} sx={{ mb: '5px' }}>
                                                            <Icons icon={tech.icon} sx={styles.Icons} />
                                                            <Typography variant='body1' component='p' sx={styles.featureText}>
                                                                {tech.name}
                                                            </Typography>
                                                        </Stack>
                                                    ))
                                                }
                                            </Grid>
                                            <Grid item md={6} sm={6} xs={12}>
                                                {work.services &&
                                                    <Typography variant='h6' component='h6' sx={styles.FeaturesTitle}>
                                                        Services
                                                    </Typography>
                                                }
                                                {work.services &&
                                                    work.services.map((service, i) => (
                                                        <Stack direction='row' key={i} sx={{ mb: '5px' }}>
                                                            <Icons icon={service.icon} sx={styles.Icons} />
                                                            <Typography variant='body1' component='p' sx={styles.featureText}>
                                                                {service.name}
                                                            </Typography>
                                                        </Stack>
                                                    ))
                                                }
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Stack>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.Navigation}>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </Box>
            <Box sx={styles.DotNavigation}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </Box>
        </Box>
    );
};
export default Carousels;

// Dot Button
export const DotButton = ({ selected, onClick }) => (
    <ButtonBase
        className={selected ? 'is-selected' : ''}
        onClick={onClick}
    />
);
// Prev Button
const PrevButton = ({ enabled, onClick }) => (
    <ButtonBase
        onClick={onClick}
        className={!enabled ? 'disable' : ''}
        disabled={!enabled}
    >
        <Icon icon='entypo:chevron-small-left' />
    </ButtonBase>
);
// Next Button
const NextButton = ({ enabled, onClick }) => (
    <ButtonBase
        onClick={onClick}
        className={!enabled ? 'disable' : ''}
        disabled={!enabled}
    >
        <Icon icon='entypo:chevron-small-right' />
    </ButtonBase>
);
//Custom Component
const Icons = styled(Icon)``;