import React from 'react'
import Link from 'next/link'

const Expenses = () => {
    return (
        <div>
            <h1>Despesas</h1>
            <div>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}

export default Expenses