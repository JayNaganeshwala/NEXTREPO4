"use client"
export default function errorcls({error}:{error:Error}){
    return <h1>Error occured {error.message}</h1>
}