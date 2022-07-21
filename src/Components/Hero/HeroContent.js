import { Box, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import TextLoop from 'react-text-loop';

//Data
import Contents from 'Data/Hero/HeroContent.data';

//Styles
import styles from 'Styles/Hero/HeroContent.styles';

const HeroContent = () => {
    return (
        <Box>
            <Box sx={styles.HeroContent}>
                <Typography variant='body1' component='h6'>
                    {Contents.greetings}
                </Typography>
                <Typography variant='h2' component='h2'>
                    {Contents.name}
                </Typography>
                <Loop sx={styles.TextLoops}>
                    {Contents.professions &&
                        Contents.professions.map((profession, i) => (
                            <Typography
                                variant='h5'
                                component='h5'
                                key={i}
                            >
                                {profession.name}
                            </Typography>
                        ))
                    }
                </Loop>{' '}
                <Typography component='p' sx={styles.Description}>
                    {Contents.description}
                </Typography>
                <Box sx={{ a: { textDecoration: 'none' } }}>
                    <Link href='https://drive.google.com/uc?export=download&id=1EVX09gOjuVOVnXyLR-UoPB1MjzM7cZcQ'>
                        <a target='_blank'>
                            <ButtonBase sx={styles.Button}>
                                {Contents.btnText}
                            </ButtonBase>
                        </a>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};
export default HeroContent;

//Custom Component
const Loop = styled(TextLoop)``;