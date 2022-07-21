import { Box, Grid, Typography, IconButton, DialogTitle, DialogContent, DialogContentText, Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import parse from 'html-react-parser';

//Image
import AboutImage from 'Assets/about-me.png';

//Styles
import styles from 'Styles/Blog/Dialogs.styles';

const Dialogs = ({ handleClose, details, title, image, category, time, strategy, source }) => {
    return (
        <>
            <DialogTitle id='scroll-dialog-title' sx={styles.DialogTitle}>
                <Icons sx={styles.TitleIcon} icon='fluent:app-title-20-filled' />
                <Typography variant='h6' component='h6' sx={styles.BlogTitle}>
                    {title}
                </Typography>
                <IconButton
                    onClick={handleClose}
                    aria-label='close'
                >
                    <Icon icon='clarity:window-close-line' />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ pt: '15px !important' }}>
                <DialogContentText
                    id='scroll-dialog-description'
                    tabIndex={-1}
                    sx={{ color: 'text.primary' }}
                >
                    <Grid container spacing={3} sx={{ alignItems: 'center' }}>
                        <Grid item md={7.2} xxs={12}>
                            <Box component='img' src={image} alt={title} sx={styles.BlogImage} />
                        </Grid>
                        <Grid item md={4.8} xxs={12}>
                            <Box >
                                <Box sx={styles.AboutBox}>
                                    <Box component='img' src={AboutImage} alt='About Me' sx={styles.AboutMeImage} />
                                    <Typography variant='h6' component='h6'>
                                        Siam Ahnaf
                                    </Typography>
                                    <Typography variant='body1' component='p'>
                                        <Icon icon='clarity:tag-solid-badged' />
                                        {category}
                                    </Typography>
                                    <Typography variant='body1' component='p'>
                                        <Icon icon='fluent:timer-12-filled' />
                                        {time}
                                    </Typography>
                                </Box>
                                <Typography variant='body1' component='p' sx={styles.AboutStratgy}>
                                    {strategy}
                                </Typography>
                                <BootstrapTooltip
                                    title='reference'
                                    followCursor
                                    placement='top'
                                    describeChild={true}
                                    PopperProps={{ disablePortal: true, }}
                                >
                                    <Box sx={styles.AboutReferrence}>
                                        <Link href={source}>
                                            <a>
                                                <Icon icon='mdi:link-box-variant' />
                                                {source}
                                            </a>
                                        </Link>
                                    </Box>
                                </BootstrapTooltip>
                            </Box>
                        </Grid>
                    </Grid>
                    <Typography variant='body1' component='p' sx={styles.BlogDescription}>
                        {parse(details)}
                    </Typography>
                </DialogContentText>
            </DialogContent>
        </>
    );
};
export default Dialogs;

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
    },
}));

//Custom Component
const Icons = styled(Icon)``;