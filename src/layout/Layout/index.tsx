import Head from 'next/head'
import Header from '../Header'
import React from 'react'


interface LayoutProps {
    children: React.ReactNode | [React.ReactNode]
}


const Index = ({
 children
}:LayoutProps) => {
    return (
        <>
            <Head>
                <title> ФКС РОССИЯ</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* <meta name="description" content={meta?.description} />
                <meta name="keywords" content={meta?.keywords} /> */}
            </Head>
            
            <Header/>
            {children}
            
        </>
    )
}

export default Index