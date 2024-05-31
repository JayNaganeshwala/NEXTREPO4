"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "../styles.css"
function randmint(count:number){
    return Math.floor(Math.random()*count)
}
export default function Home(){

    let activepath = usePathname()
    console.log('activepath: ', activepath);

    let navlinks = [
        {name:"Register",href:"/register"},
        {name:"Login",href:"/login"},
        {name:"Logout",href:"/logout"},
        {name:"Blog",href:"/blog"},
    ]
    return (
        <>
            {
                navlinks.map((e) => {
                    const isActive = activepath.startsWith(e.href)
                    console.log('isActive: ', isActive);
                    return <span key={e.name}>
                        <Link className={isActive ? "text-xl  subpixel-antialiased hover:subpixel-antialiased" : "text-xl text-zinc-400"} href={e.href} key={e.name}> {e.name}</Link>
                    </span>
                })
            }
        </>
    )
}