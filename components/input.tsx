import React from 'react'

const Input = ({...children}) => {
    return (
        <div className='w-full px-3'>
            <label className="text-gray-700 text-sm font-bold">{children.label}</label>
            <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                {...children}
            />
            {children.msg_error && <p className="text-red-500 text-xs italic">{children.msg_error}</p>}
        </div>
    )
}

export default Input