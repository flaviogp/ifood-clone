import React from 'react'
import Header from './_components/header'
import Search from './_components/search'
import CategoryList from './_components/category-list'
import Image from 'next/image'


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
    </>
  )
}

export default Home