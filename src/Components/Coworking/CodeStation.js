import { Box, Grid } from '@mui/material';

//Sub Components
import Content from './CodeStation/Content';
import Logo from './CodeStation/Logo';

//Styles
import styles from "Styles/Coworking/CodeStation/Codestation.styles";

const CodeStation = () => {
    return (
        <Box sx={styles.Container}>
            <Grid container columnSpacing={4}>
                <Grid item md={8} msm={7} xxs={12}>
                    <Content />
                </Grid>
                <Grid item md={4} msm={5} xxs={12}>
                    <Logo />
                </Grid>
            </Grid>
        </Box>
    );
};
export default CodeStation;