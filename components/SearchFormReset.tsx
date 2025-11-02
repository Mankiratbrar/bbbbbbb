'use client'
import React from 'react'
import Link from 'next/link';
import { CrossIcon } from "@/components/ui/icons/akar-icons-cross";

const SearchFormReset = () => {
    const reset = () => {
          const form = document.querySelector('.search-form') as HTMLFormElement
          if (form) {
               form.reset()    
          }
     }
    return (<>
        <button type='reset' onClick={reset}>
            <Link href="/" className='search-btn'>
                <CrossIcon className='size-5'></CrossIcon>
            </Link>
        </button>
    </>)
};

export default SearchFormReset;