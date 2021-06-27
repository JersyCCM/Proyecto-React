import React from 'react'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import {Productos} from './Products/products'

export const Appmenu = () => {
  const greating = "Menú Mamma Mía!"
  return (
    <div>
 
    <Navbar />
    <ItemListContainer greating={greating} />
    <Productos/>
   
    </div>
  )
}

