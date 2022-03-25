import React from 'react'
import '../styles/styles.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    )
}