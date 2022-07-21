import { Box, SvgIcon, Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-scroll';

//Navs Data
import Navs from 'Data/Header/Nav.data';

//styles
import styles from 'Styles/Header/Nav.styles';

const Nav = () => {
    return (
        <Box component='nav'>
            {Navs &&
                Navs.map((nav, i) => (
                    <BootstrapTooltip
                        key={i}
                        title={nav.title}
                        followCursor
                        placement='top'
                        describeChild={true}
                        PopperProps={{ disablePortal: true, }}
                    >
                        <Box sx={styles.NavMenu}>
                            <Link
                                activeClass='active'
                                to={nav.path}
                                spy={true}
                                smooth={true}
                                duration={500}
                                className={Navs.length === i + 1 ? 'remove-border' : ''}
                            >
                                <SvgIcon viewBox={nav.viewbox}>
                                    {nav.icon}
                                </SvgIcon>
                            </Link>
                        </Box>
                    </BootstrapTooltip>
                ))
            }
        </Box>
    );
};
export default Nav;

//Custom Component with styles
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