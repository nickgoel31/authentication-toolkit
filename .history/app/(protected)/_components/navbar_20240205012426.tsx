import { Button } from '@/components/ui/button'
import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border-b w-full fixed top-0 left-0 pl-60 z-[10] bg-background py-3 px-8 items-center flex justify-end'>
        <Button variant={"link"} className='group'>
            <Link href={"/docs"} className='flex gap-1 items-center'>
                Docs <ArrowUpRightIcon className='group-hover:translate-x-1 translate-y-1'  size={20}/>
            </Link>
        </Button>
    </div>
  )
}

export default Navbar