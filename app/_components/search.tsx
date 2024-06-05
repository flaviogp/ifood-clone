import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { SearchIcon } from 'lucide-react'

type Props = {}

const search = (props: Props) => {
  return (
    <div className="flex gap-2">
        <Input placeholder='Buscar restaurantes' className='border-none'/>
        <Button size='icon'>
            <SearchIcon size={20}/>
        </Button>
    </div>
  )
}

export default search