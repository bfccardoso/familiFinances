import React from 'react'
import '../styles/styles.css'

import Header from '../components/header'
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Header />
            <div className='container mx-auto max-h-full'>
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    )
}