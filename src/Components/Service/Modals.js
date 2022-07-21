import { useState, useEffect } from 'react';
import { Box, ButtonBase, Typography, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { Icon } from '@iconify/react';

//Components
import Carousels from './Modals/Carousels';

//Styles
import styles from 'Styles/Service/Modals.styles';

const Modals = (service) => {
    const [visible, setVisible] = useState(false);
    const [hidden, setHidden] = useState(false);
    const modalToggler = () => {
        setVisible(!visible)
        setHidden(true)
    }
    const onAnimationEnd = () => {
        if (!visible) {
            setHidden(false)
        }
    }
    useEffect(() => {
        const body = document.querySelector('body');
        const header = document.querySelector('header');
        if (hidden) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            body.style.overflow = 'hidden';
            body.style.paddingRight = `${scrollBarWidth}px`;
            header.style.width = `calc(6% - ${(scrollBarWidth * 6) / 100}px)`
        } else if (!hidden) {
            body.style.overflow = 'unset';
            body.style.paddingRight = '0px';
            header.style.width = '6%'
        }
    }, [hidden])
    return (
        <Box>
            <ButtonBase onClick={modalToggler} sx={styles.ReadmoreBtn}>
                {service.btnText}
            </ButtonBase>
            <Modal
                visible={visible}
                onClose={modalToggler}
                customMaskStyles={{ background: '#0B0B13AB' }}
                enterAnimation='slideDown'
                leaveAnimation='slideDown'
                onAnimationEnd={onAnimationEnd}
                sx={styles.Modal}
            >
                <Typography variant='h5' component='h5' sx={styles.ModalHeading}>
                    {service.name}
                </Typography>
                <Divider sx={{ mb: '15px' }} />
                <Box sx={styles.ModalContent}>
                    <Stack direction='row' sx={{ alignItems: 'center', flexWrap: { msm: 'unset', xxs: 'wrap' } }}>
                        <Icons icon={service.icon} sx={styles.ModalIcon} />
                        <Typography variant='body1' component='p' sx={styles.ModalParagraph}>
                            {service.details}
                        </Typography>
                    </Stack>
                    <Typography variant='h6' component='h6' sx={styles.Latestwork}>
                        Latest Work
                    </Typography>
                    <Carousels works={service.works} visible={hidden} />
                </Box>
            </Modal>
        </Box>
    );
};
export default Modals;

//Custom Component
const Modal = styled(Rodal)``;
const Icons = styled(Icon)``;