import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './style'
import Layout from '../../layout/Layout'
import { Provider } from 'react-redux';
import store from '../../app/store'




const MyApp = ({ Component, pageProps, router }: AppProps) => {
    // const { asPath } = router;


    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...{...pageProps, router}} />
                </Layout>
                <GlobalStyle />
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
