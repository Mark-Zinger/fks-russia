import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './style'
import Layout from '../../layout/Layout'
import { Provider } from 'react-redux';
import store from '../../app/store';
import { AnimatePresence } from 'framer-motion';




const MyApp = ({ Component, pageProps, router }: AppProps) => {
    // const { asPath } = router;

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <AnimatePresence exitBeforeEnter >
                        <Component {...{...pageProps, router}} key={router.route}/>
                    </AnimatePresence>
                </Layout>
                <GlobalStyle />
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
