import { useState, useEffect } from 'react';
import { Container, Box, Stack, ButtonBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { Grid, Slug } from 'mauerwerk';
import Link from 'next/link';

//Screen Dimentions
import useWindowDimensions from 'Utilis/Screen';

//SectionHeader
import SectionHeader from 'Utilis/SectionHeader';

//Components
import Award from 'Components/Portfolio/Award';

//Data
import Porfolios from 'Data/Portfolio/Portfolios.data';

//Styles
import styles from 'Styles/Portfolio/Portfolio.styles';

const Portfolio = () => {
    const [Items, setItems] = useState(Porfolios);
    const [currentActive, setCuttentActive] = useState(0);
    const [selectedButton, setSelectedButton] = useState('All');
    const [column, setColumn] = useState(4);
    const { width } = useWindowDimensions();
    const filterItem = (filterItem, tabIndex) => {
        const updateItem = Porfolios.filter((curElem) => {
            return curElem.filter === filterItem;
        });
        setSelectedButton(filterItem);
        setItems(updateItem);
        setCuttentActive(tabIndex);
    }
    useEffect(() => {
        if (width >= 1980) {
            setColumn(6)
        } else if (width < 1980 && width >= 1536) {
            setColumn(5)
        } else if (width < 1536 && width >= 768) {
            setColumn(4)
        } else if (width < 768 && width >= 576) {
            setColumn(3)
        } else if (width < 576 && width >= 480) {
            setColumn(2)
        } else if (width < 480 && width >= 0) {
            setColumn(1)
        }
    }, [width])
    return (
        <Container sx={{ py: '30px' }} component='section' id='work' disableGutters maxWidth={false}>
            <SectionHeader name='My Portfolio' />
            <Typography variant='body1' component='h6' sx={styles.SubHeader}>
                Each work is a new experience!
            </Typography>
            <Typography variant='h6' component='h6' align='right' sx={styles.selectedButton}>
                {selectedButton}
            </Typography>
            <Box sx={styles.Buttons}>
                <ButtonBase
                    onClick={() => { setItems(Porfolios); setCuttentActive(0); setSelectedButton('All') }}
                    className={currentActive === 0 ? 'active' : ''}
                >
                    <Icon icon='icon-park-outline:all-application' />
                    <Typography variant='body1' component='span'>
                        All
                    </Typography>
                </ButtonBase>
                <ButtonBase
                    onClick={() => filterItem('frontend', 1)}
                    className={currentActive === 1 ? 'active' : ''}
                >
                    <Icon icon='fluent:phone-desktop-16-regular' />
                    <Typography variant='body1' component='span'>
                        Frontend Development
                    </Typography>
                </ButtonBase>
                <ButtonBase
                    onClick={() => filterItem('backend', 2)}
                    className={currentActive === 2 ? 'active' : ''}
                >
                    <Icon icon='mdi:database-cog-outline' />
                    <Typography variant='body1' component='span'>
                        Backend Development
                    </Typography>
                </ButtonBase>
                <ButtonBase
                    onClick={() => filterItem('cloud', 3)}
                    className={currentActive === 3 ? 'active' : ''}
                >
                    <Icon icon='ic:baseline-settings-system-daydream' />
                    <Typography variant='body1' component='span'>
                        Cloud Services
                    </Typography>
                </ButtonBase>
            </Box>
            <Box>
                <Grid
                    data={Items}
                    keys={d => d.key}
                    heights={200}
                    columns={column}
                    margin={5}
                    lockScroll={true}
                    closeDelay={0}
                >
                    {(data, open, toggle) => (
                        <>
                            {open &&
                                <Box sx={styles.OpenedCard}>
                                    <Box component='img' src={data.image} alt='Portfolio' sx={styles.CardOpenedImage} />
                                    <Box sx={styles.CardOpenedContent}>
                                        <Slug>
                                            <Typography variant='h6' component='h6' sx={styles.OpenedCardTitle}>
                                                {data.themeName}
                                            </Typography>
                                            {data.themeUrl &&
                                                <Stack direction='row' sx={styles.CardLink}>
                                                    <Icon icon='mdi:web' />
                                                    <Link href={data.themeUrl}>
                                                        <a target="_blank">
                                                            {data.themeUrl}
                                                        </a>
                                                    </Link>
                                                </Stack>
                                            }
                                            {data.github &&
                                                <Stack direction='row' sx={styles.CardLink}>
                                                    <Icon icon='ion:logo-github' />
                                                    <Link href={data.github}>
                                                        <a target="_blank">
                                                            {data.github}
                                                        </a>
                                                    </Link>
                                                </Stack>
                                            }
                                            <Typography variant='body1' component='p' sx={styles.CardParagraph}>
                                                {data.details}
                                            </Typography>
                                        </Slug>
                                    </Box>
                                    <ButtonBase onClick={open ? toggle : null} sx={styles.CloseButton}>
                                        <Icon icon='ion:close-outline' />
                                    </ButtonBase>
                                </Box>
                            }
                            {!open &&
                                <Box onClick={!open ? toggle : null} sx={styles.Card}>
                                    <Box component='img' src={data.image} alt='Portfolio' sx={styles.CardImage} />
                                    {!open &&
                                        <>
                                            <Box className='css-mn3uyd-hover' sx={styles.CardContent}>
                                                <Typography variant='h6' component='h6'>
                                                    {data.service}
                                                </Typography>
                                                <Typography variant='body1' component='p'>
                                                    {data.themeName}
                                                </Typography>
                                            </Box>
                                            <Icons icon='ps:zoom-in' className='css-ufn734rby-hovicon' sx={styles.CardIcons} />
                                        </>
                                    }
                                </Box>
                            }
                        </>
                    )}
                </Grid>
            </Box>
            <Award />
        </Container>
    );
};
export default Portfolio;

//Custom Component
const Icons = styled(Icon)``;