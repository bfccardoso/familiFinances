import React from 'react'
import Link from 'next/link'
import Menu from './menu'

const Header = () => {
    return (
        <div>
            <div className='bg-yellow-100 text-2xl font-bold text-center text-yellow-800 py-4'>
                <Link href={'/'}>
                    <a className='text-shadow'>CONTROLE FINANCEIRO FAMILIAR</a>
                </Link>
            </div>            
            <Menu />
        </div>
    )
}

export default Header