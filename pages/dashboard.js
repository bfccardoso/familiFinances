import React from 'react'
import Link from 'next/link'

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard