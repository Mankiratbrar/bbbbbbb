import Navbar from "../../components/navbar"

export default function rootlayout({children}:Readonly<{children:React.ReactNode}>){
    return(
        <main className="font-normal">
            <Navbar />
                {children}
        </main>
    )
}