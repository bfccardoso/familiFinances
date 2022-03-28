import React from 'react'
import Link from 'next/link'

const Menu = () => {
    return (
        <div className='bg-gray-200 font-bold text-2xl text-center text-orange-300 py-2 grid grid-cols-3'>
            <Link href={'/user'}>
                <a className='hover:underline hover:text-orange-400'>Membros</a>
            </Link>
            <Link href={'/expenses'}>
                <a className='hover:underline hover:text-orange-400'>Despesas</a>
            </Link>
            <Link href={'/dashboard'}>
                <a className='hover:underline hover:text-orange-400'>Dashboard</a>
            </Link>
        </div>
    )
}

export default Menu