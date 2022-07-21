import { Stack, Box, Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';

//Styles
import styles from 'Styles/Service/Techs.styles';

const Techs = ({ techs }) => {
    return (
        <Stack sx={{ my: '8px' }} direction='row'>
            {techs &&
                techs.map((tech, i) => (
                    <BootstrapTooltip
                        key={i}
                        title={tech.name}
                        followCursor
                        enterDelay={1}
                        leaveDelay={1}
                        placement='top'
                    >
                        <Box>
                            <Icons icon={tech.icon} sx={styles.Icons} />
                        </Box>
                    </BootstrapTooltip>
                ))
            }
        </Stack>
    );
};
export default Techs;

//Custom component with styles
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.primary.tooltip_bg,
        top: '98%'
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.primary.tooltip_bg,
        color: theme.palette.primary.text_secondary,
        padding: '5px 10px',
        fontSize: '13px'
    }
}));
// Custom Component
const Icons = styled(Icon)``;