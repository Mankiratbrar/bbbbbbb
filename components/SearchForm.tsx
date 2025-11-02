import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset';
import { SearchIcon } from '@/components/ui/icons/akar-icons-search';
const SearchForm = ({ query }:{query?:string}) => { 
     
    return (<><div>
           <Form action="/" scroll={false} className='search-form'>
                <input name='query'
                defaultValue={query}
                className='search-input'
                placeholder='Search Startups '/>

                <div className='flex gap-2 transition-all duration-200 ease-in-out'>
                    {query && 
                         <SearchFormReset></SearchFormReset>}

                         <button type='submit' className='search-btn'><SearchIcon className='size-5.5'/></button>  
                    
                </div>
           </Form>
        </div></>)
};

export default SearchForm;