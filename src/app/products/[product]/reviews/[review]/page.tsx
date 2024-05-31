export default function Review({params}:{params:{review:string,product:string}}){
    return <h1>Dynamic Review Page {params.product} and {params.review}</h1>
}