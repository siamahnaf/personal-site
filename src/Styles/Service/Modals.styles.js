const styles = {
    Modal: {
        zIndex: '999999 !important',
        '& .rodal-dialog': {
            backgroundColor: 'primary.card_bg',
            pr: {
                smd: '15px',
                xxs: '2px'
            },
            width: {
                lg: '950px !important',
                md: '900px !important',
                smd: '700px !important',
                lsm: '600px !important',
                msm: '540px !important',
                sm: '430px !important',
                xs: '320px !important',
                xxs: '280px !important'
            },
            height: {
                lg: '580px !important',
                xxs: '500px !important'
            }
        }
    },
    ReadmoreBtn: {
        p: '5px 10px',
        ml: '-8px'
    },
    ModalHeading: {
        fontSize: '20px',
        fontWeight: 500,
        color: 'primary.main'
    },
    ModalContent: {
        height: {
            lg: '500px',
            xxs: '400px'
        },
        overflowY: 'auto',
        overflowX: 'hidden',
        p: '5px',
        pr: {
            smd: '5px',
            sm: '16px',
            xs: '17px',
            xxs: '18px'
        }
    },
    ModalIcon: {
        flex: {
            smd: '0 0 12%',
            lsm: '0 0 20%',
            msm: '0 0 25%',
            xxs: '0 0 100%'
        },
        backgroundColor: 'primary.main',
        mr: {
            msm: '10px',
            xxs: '0px'
        },
        height: {
            smd: '80px',
            lsm: '120px',
            msm: '150px',
            sm: '180px',
            xxs: '150px'
        },
        p: {
            msm: '7px',
            sm: '25px',
            xxs: '30px'
        },
        borderRadius: '5px',
        color: 'primary.light',
        mb: {
            msm: '0px',
            sm: '10px',
            xxs: '15px'
        }
    },
    ModalParagraph: {
        flex: {
            smd: '0 0 85%',
            lsm: '0 0 77%',
            msm: '0 0 72%',
            xxs: '0 0 100%'
        },
        mt: '10px'
    },
    Latestwork: {
        mt: '0.5rem',
        mb: '1rem',
        fontSize: '20px',
        fontWeight: 400
    }
};
// Export
export default styles;