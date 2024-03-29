'use client'

import {UserGroupIcon, HomeIcon, DocumentDuplicateIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks(){
    const pathname = usePathname()
    
    return(
        <Link href='/' className={clsx(
        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
        {
        'bg-sky-100 text-blue-600': pathname === '/',
        },
    )}>Home</Link>
    )
}