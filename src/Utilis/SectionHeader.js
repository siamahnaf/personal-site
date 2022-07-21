import { Box, Typography } from '@mui/material';

//Styles
import styles from 'Styles/Utilis/SectionHeader.styles';

const SectionHeader = ({ name, descriptions }) => {
    return (
        <Box sx={styles.SectionHeading}>
            <Typography variant="h6" component="h6">
                {name}
            </Typography>
            <Typography variant="body1" component="p">
                {descriptions}
            </Typography>
        </Box>
    );
};
export default SectionHeader;