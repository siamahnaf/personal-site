import { Box, Stack, Container } from '@mui/material';
import BackgroundSlider from 'react-background-slider';

//Components
import TopBar from 'Components/Hero/TopBar';
import HeroContent from 'Components/Hero/HeroContent';
import Feature from 'Components/Hero/Feature';

//Slide Show Images
import image1 from 'Assets/background/hero-bg-1.png';
import image2 from 'Assets/background/hero-bg-2.png';

//Styles
import styles from "Styles/Hero/Hero.styles";


const Hero = () => {
    return (
        <Container component='section' id="home" disableGutters maxWidth={false}>
            <Box sx={{ position: "relative" }}>
                <TopBar />
            </Box>
            <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                <Box sx={styles.HeroLeft}>
                    <HeroContent />
                </Box>
                <Box sx={styles.HeroRight}>
                    <BackgroundSlider
                        images={[image1, image2]}
                        duration={8}
                        transition={2}
                    />
                </Box>
            </Stack>
            <Feature />
        </Container>
    );
};
export default Hero;