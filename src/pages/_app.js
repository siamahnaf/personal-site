import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from 'Theme';
import createEmotionCache from 'Emotion';
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { value: isDark } = useDarkMode();
  const [mode, setMode] = React.useState('light');
  React.useEffect(() => {
    setMode(isDark ? 'dark' : 'light')
  }, [isDark]);
  const muiTheme = React.useMemo(() => createTheme(theme(mode)), [mode]);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};