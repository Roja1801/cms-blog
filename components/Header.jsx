import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect (() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
      },[])
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-white py-8'>
            <div className='md:float-left block '>
                <Link href='/'>
                    <span className='cursor-pointer ml-3 font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-tl from-blue-700 to-violet-800 animate-pulse'>
                        WEBLOG

                    </span>

                </Link>

            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle ml-4 font-bold cursor-pointer text-black uppercase hover:animate-bounce'>
                            {category.name} 

                        </span>
                    </Link>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Header