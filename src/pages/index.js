import { Fragment } from 'react';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});
//Seo
import Seo from 'Utilis/Seo';
//Sections
import Header from 'Sections/Header';
import Hero from 'Sections/Hero';
import About from 'Sections/About';
import Coworking from "Sections/Coworking";
import Service from 'Sections/Service';
import Skill from 'Sections/Skill';
import Portfolio from 'Sections/Portfolio';
import Client from 'Sections/Client';
import Blog from 'Sections/Blog';
import Footer from 'Sections/Footer';

const Home = () => {
  return (
    <Fragment>
      <Box sx={{ div: { zIndex: '99999999999 !important' } }}>
        <AnimatedCursor
          innerSize={8}
          outerSize={45}
          color='255, 95, 13'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.5}
        />
      </Box>
      <Seo />
      <Header />
      <Hero />
      <About />
      <Coworking />
      <Service />
      <Skill />
      <Portfolio />
      <Client />
      <Blog />
      <Footer />
    </Fragment>
  );
};
export default Home;