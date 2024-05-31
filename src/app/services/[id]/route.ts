import { comments } from "../comments";

export async function GET(_request:Request, { params }:{params:{id:string}}){
    const comment = comments.find((comment) => comment.id == parseInt(params.id))
    return new Response(JSON.stringify(comment), { headers: { "Content-Type": "application/json" }, status: 201 })
}

export async function PATCH(request:Request, { params }:{params:{id:string}}){
    const body = await request.json()
    const {text} = body

    interface Person {
        status: string;
        response: Object
    }

    let finder = comments.findIndex((v)=> (v.id) === parseInt(params.id))
    let res: Person = {status:"fail",response:{}}

    if(finder !== -1){
        comments[finder].text = text
        res.status = "success"
        res.response = comments[finder]
    }
    return new Response(JSON.stringify(res), { headers: { "Content-Type": "application/json" }, status: 201 })
}