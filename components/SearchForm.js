'use client'
import React, { useRef } from 'react'
import ButtonSubmit from './ButtonSubmit'
import useCustomRouter from '@/hooks/useCustomRouter';

function SearchForm() {
    const {pushQuery,query} = useCustomRouter();
    const formRef = useRef();
    async function handleSearch(formData){
        const search = formData.get('search');
        pushQuery({search});
    }
  return (
   <form action={handleSearch} ref={formRef}>
    <input type='search' name='search' placeholder='search' defaultValue={query.search || ''}></input>
    <ButtonSubmit value={"search"}/>
   </form>
  )
}

export default SearchForm