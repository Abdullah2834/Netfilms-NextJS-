import React, { Fragment } from 'react'

import Movies from "@/mocks/movies.json"
import Category from '@/mocks/genres.json';
import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories'



export default function HomeContainer() {
    
  return (
    <div>
        <FeaturedMovie movie={Movies.results[0]}/>
        <Categories categories={Category.genres.slice(0,5)}/>
    </div>
  )
}
