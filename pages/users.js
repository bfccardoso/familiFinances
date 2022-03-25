import React from 'react'
import Link from 'next/link'

const Users = () => {
    return(
        <div>
            <h1>Membros</h1>
            <div>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}

export default Users