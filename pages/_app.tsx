import React from 'react'
import '../styles/styles.css'

import Header from '../components/header'
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps }) {
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Header />
            <div className='container p-5 mx-auto'>
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    )
}