import React from 'react'
import Header from './_components/header'
import Search from './_components/search'
import CategoryList from './_components/category-list'
import Image from 'next/image'
import ProductList from './_components/product-list'
import { Button } from './_components/ui/button'
import { ChevronRightIcon, Ghost } from 'lucide-react'


const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image 
          src="/promo-banner-pizza.webp" 
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          className='w-full h-auto object-contain'
          sizes='100vw'
          quality={100}
        />
      </div>

      <div className="pt-6 space-y-4">
        <div className='px-5 flex justify-between items-center'>
          <h2 className='font-semibold'>
            Pedidos recomendados
          </h2>
          <Button variant='ghost' className='h-fit p-0 text-primary hover:bg-transparent'>
            Ver todos
            <ChevronRightIcon size={16}/>
          </Button>
        </div>
        <ProductList />
      </div>
    </>
  )
}

export default Home