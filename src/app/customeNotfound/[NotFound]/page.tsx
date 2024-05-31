
import { notFound } from "next/navigation"
export default function NotFoundCustome({params}:{params:{NotFound:number}}){

    if(params.NotFound > 1000){
        notFound()
    }
    return (
        <>
        <h1>Quantity is {params.NotFound}</h1>
        </>
    )
}