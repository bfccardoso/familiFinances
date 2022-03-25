import React from 'react'
import Link from 'next/link'

const Index = () => {
    return(
        <div>
            <h1>Financias Familiar</h1>
            <div>
                <Link href={'/users'}>
                    <a>Membros</a>
                </Link>
                <Link href={'/expenses'}>
                    <a>Despesas</a>
                </Link>
                <Link href={'/dashboard'}>
                    <a>Dashboard</a>
                </Link>
            </div>
        </div>
    )
}

export default Index