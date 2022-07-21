const theme = (mode) => ({
    typography: {
        fontFamily: 'Rubik',
        // 300 -- Light
        // 400 -- Regular
        // 500 -- Medium
        // 600 -- Semi Bold
        // 700 -- Bold
    },
    palette: {
        mode,
        // Primary Color --START
        primary: {
            main: '#FF9301', // Primary background color
            main_light: '#FF93015E', //Main Color But Less Opacity
            dark: '#101130', // Static Dark color
            light: '#ffffff', // Static Light color
            box_shadow: '#1011301f', // Box Shadow color
            white_border: '#aaa', // White border for portfolio
            slider_arrow: '#C1C1C1', // Client slider arrow icon
            form_border: '#9e9e8e', // Form Border Color
            main_box_shadow: '#C8883278', // Box Shadow for Blog Navigation
            codeGradient: 'linear-gradient(-120deg, #FFF , #FFBEB8)', // Code Gradient
            codebg: "#1B2240",
            ...(mode === 'light' && {
                tooltip_bg: '#000000c2', // Tooltip Background (Light Mode)
                text_secondary: '#ffffffcf', // Text color for light mode (Ligth mode)
                border_color: '#0000001c', // Border Color (Light Mode)
                card_bg: '#ffffff', // Secondary Background Card (Dark Mode)
                pure_white: '#101130', // Direct Dark Color (Ligth Mode)
                progress: '#00000091', // Progress Value Border Color (Light Mode)
                slider_bg: '#EBEBEB', // Client slider background color (Light Mode)
                foter_text: '#555', // Footer Text Color (Light Mode)
                main_light_primary: '#FBC57F', // Section Heading BG Color (Light Mode)
                cabGradient: 'linear-gradient(120deg, #B5CBD8, #FFF)', // Cabbage Gradient
                codeGradient: 'linear-gradient(-120deg, #FFF , #FFBEB8)', // Code Gradient
                cabColor: "#41799C26", // Cabbage Logo Background Color
                codeColor: "#FF51404A", // CodeStation Logo Background Color
            }),
            ...(mode === 'dark' && {
                tooltip_bg: '#ffffffdb', // Tooltip Background (Dark Mode)
                text_secondary: '#101130', // Text color for Dark mode (Dark mode)
                border_color: '#ffffff0a', // Border Color (Dark Mode)
                card_bg: '#2b2c2f', // Secondary Background Card (Dark Mode)
                pure_white: '#ffffff', // Direct White Color (Dark Mode)
                progress: '#ffffff', // Progress Value Border Color (Dark Mode)
                slider_bg: '#2b2c2f', // Client slider background color (Dark Mode)
                foter_text: '#ffffffcf', // Footer Text Color (Dark Mode)
                main_light_primary: '#FF9301', // Section Heading BG Color (Dark Mode)
                cabGradient: 'linear-gradient(120deg, #2b2c2f, #202124)', // Cabbage Gradient,
                codeGradient: 'linear-gradient(120deg, #2b2c2f, #202124)', // Code Gradient
                cabColor: "#2b2c2f", // Cabbage Logo Background Color
                codeColor: "#2b2c2f", // CodeStation Logo Background Color
            }),
        },
        // Background Color --START--
        ...(mode === 'light' && {
            background: {
                default: '#ffffff', // Light mode background color (Light Mode)
            }
        }),
        ...(mode === 'dark' && {
            background: {
                default: '#202124', // Dark mode background color (Dark Mode)
            }
        }),
        // Text color --START--
        text: {
            ...(mode === 'light'
                ? {
                    primary: '#101130', // Primary Text Color (Light Mode)
                }
                : {
                    primary: '#ffffffcf', // Primary Text Color (Dark Mode)
                }),
        },
    },
    breakpoints: {
        values: {
            xxs: 0, // Double Extra Small Devices
            xs: 360, // Extra Small Devices
            sm: 480, // Small Devices
            msm: 576, // Medium Small Medium Devices
            lsm: 640, // Large Small Medium Devices
            smd: 768, // Small Medium Devices
            md: 992, // Medium Devices
            lg: 1200, // Large Devices
            xl: 1536, // Extra Large Devices
            xxl: 1980 // Double Extra Large Devices
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    '@media (min-width: 0px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 480px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 992px)': {
                        paddingLeft: '8.5%',
                        paddingRight: '2.5%',
                    }
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'Rubik',
                    fontSize: '16px',
                    borderRadius: '5px',
                }
            }
        }
    }
});
export default theme;