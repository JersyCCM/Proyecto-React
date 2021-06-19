import React from 'react'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'

export const Appmenu = () => {
  const greating = "Menú Mamma Mía!"
  return (
    <div>
      <Navbar />
      <ItemListContainer greating={greating} />

    </div>
  )
}
