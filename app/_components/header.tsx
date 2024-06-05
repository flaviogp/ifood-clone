import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex justify-between px-5 pt-6 pb-0'>
        <Image src="/logo.png" alt="Ifood clone logo" height={30} width={100} />
        <Button
            size='icon'
            variant='outline'
            className='bg-transparent border-none'
        > 
            <MenuIcon />
        </Button>

    </header>
  )
}

export default Header