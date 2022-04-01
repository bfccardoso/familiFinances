import React from 'react'
import '../styles/styles.css'

import Header from '../components/header'
import Footer from '../components/footer'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <div className='flex flex-col h-screen justify-between'>
                <Header />
                <div className='container p-5 mx-auto'>
                    <Component {...pageProps} />
                </div>
                <Footer />
            </div>
        </QueryClientProvider>
    )
}