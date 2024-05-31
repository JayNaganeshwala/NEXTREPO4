import { Metadata } from "next"
import { resolve } from "path";

export const generateMetadata = async ({params} : {params:{product:string}}): Promise<Metadata> => {
    // console.log('params: ', params);

    const title = await new Promise( resolve => {
        setTimeout(() => {
            resolve(`iphone ${params.product}`)
        }, 1000);
    })
    return{
        title: `Product ${title}`
    }
}

export default function Product({params}:{ params:{product: string}}){
    return <h1> Hello from Product Page {params.product}</h1>
}