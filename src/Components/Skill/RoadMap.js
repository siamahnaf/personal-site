import { useState } from 'react';
import { Box, Tab, Fade, ButtonBase } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Link } from 'react-scroll';
import { Icon } from '@iconify/react';

//Components
import Journey from './RoadMap/Journey';
import Education from './RoadMap/Education';
import Qualification from './RoadMap/Qualification';

//Styles
import styles from 'Styles/Skill/RoadMap.styles';

const RoadMap = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <TabContext value={value}>
                <Box>
                    <TabList
                        onChange={handleChange}
                        aria-label='lab API tabs'
                        TabIndicatorProps={{
                            style: {
                                display: 'none',
                            }
                        }}
                        sx={{
                            '& .MuiTabs-flexContainer': {
                                flexWrap: {
                                    lg: 'unset',
                                    md: 'wrap',
                                    msm: 'unset',
                                    xxs: 'wrap'
                                }
                            },
                            button: {
                                mb: {
                                    lg: '0px',
                                    md: '15px',
                                    msm: 'unset',
                                    xxs: '15px'
                                }
                            }
                        }}
                    >
                        <Tab
                            icon={<Icon icon='fa:sitemap' />}
                            iconPosition='start'
                            label='My Journey'
                            value='1'
                            sx={styles.RoadMapButton}
                        />
                        <Tab
                            icon={<Icon icon='fa-solid:graduation-cap' />}
                            iconPosition='start'
                            label='Educations'
                            value='2'
                            sx={styles.RoadMapButton}
                        />
                        <Tab
                            icon={<Icon icon='fa-solid:user-graduate' />}
                            iconPosition='start'
                            label='Qualifications'
                            value='3'
                            sx={styles.RoadMapButton}
                        />
                    </TabList>
                </Box>
                <TabPanel value='1' sx={{ p: '5px 0' }}>
                    <Fade in={value === '1' ? true : false}>
                        <Box>
                            <Journey />
                        </Box>
                    </Fade>
                </TabPanel>
                <TabPanel value='2' sx={{ p: '5px 0' }}>
                    <Fade in={value === '2' ? true : false}>
                        <Box>
                            <Education />
                        </Box>
                    </Fade>
                </TabPanel>
                <TabPanel value='3' sx={{ p: '5px 0' }}>
                    <Fade in={value === '3' ? true : false}>
                        <Box>
                            <Qualification />
                        </Box>
                    </Fade>
                </TabPanel>
            </TabContext>
            <Link to='contact' spy={true} smooth={true}>
                <ButtonBase sx={styles.ContactButton}>
                    Contact Me
                </ButtonBase>
            </Link>
        </Box>
    );
};
export default RoadMap;