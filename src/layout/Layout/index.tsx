import Head from 'next/head'
import Header from '../Header'




const Index = ({
 children
}) => {
    return (
        <>
            <Head>
                <title> ФКС РОССИЯ</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* <meta name="description" content={meta?.description} />
                <meta name="keywords" content={meta?.keywords} /> */}
            </Head>
            <body>
                <Header/>
                {children}
            </body>
        </>
    )
}

export default Index
