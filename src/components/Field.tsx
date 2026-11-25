import type { ReactNode } from 'react'

interface FieldProps{
    label:string
    error?:String
    children:ReactNode
}

export default function Field ({ label, error, children}:FieldProps){
    return(
        <label className='flex flex-col gap-1'>
            <span className='font-medium'>
                {label}
            </span>
            {children}
            {error&& <span className='text-s, text-red-700'>{error}</span>}
        </label>
    )
}