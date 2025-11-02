import React from 'react'
import Link from 'next/link';
import { auth, signOut ,signIn} from '@/auth';
import { Button } from "@/components/ui/button"
import {Logo} from '@/components/logo';
const Navbar = async() => {
    const session =await auth()
    return (<>
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center flex-column'>
                <Logo />

                <div className='gap-5 text-black flex'>
                    {session && session?.user?(
                        <>
                        <Link href={`/user/${session?.user?.name}`}>
                            <Button>{session?.user?.name}</Button>
                        </Link>
                        <Link href={"/startup/create"}>
                        <Button variant="outline">Create</Button>
                        </Link>
                        <form action={async()=>{
                            "use server"
                            await signOut({redirectTo:"/"})}}>
                            <Button variant="outline" type='submit' className='hover:cursor-pointer bg-red-400'>Logout</Button>
                            </form>

                        
                        </>
                    ):(
                        <form action={async()=> {
                            "use server";
                            await signIn('github')}}>
                                <Button variant="outline" type='submit' className='hover:cursor-pointer bg-blue-400'  >
                                    Login
                                </Button>
                            </form>
                    )}
                </div>
            </nav>
        </header>
    </>)
};

export default Navbar;