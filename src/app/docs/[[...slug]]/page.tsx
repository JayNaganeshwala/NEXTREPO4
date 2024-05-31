export default function Docs({params}:{params:{slug:string[]}}){

    if(params?.slug?.length >= 1){
        return (<>
            {
                params?.slug?.map((e)=>{
                    return <h1>Found {e}</h1>
                })
            }
        </>)
    }
    return <h1>Hello From Docs Folder</h1>
}