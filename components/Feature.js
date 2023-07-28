import React from 'react'
import SearchForm from './SearchForm'
import Sort from './Sort'

export default function Feature() {
  return (
    <div style={{display:'flex',gap:20,margin:'20px 0'}}>
    <SearchForm/> 
    <Sort/>
    </div>
  )
}
