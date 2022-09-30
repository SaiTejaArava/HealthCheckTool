import { json } from '@sveltejs/kit';
import {filter,getUpd} from "$lib/index"
/**@type {import('./$types').RequestHandler} */



export async function POST({request}){
    const {arr}=await request.json();
    const res=await filter(arr);
    const data=await res.json();
    
    return json({data:data});
}

export async function GET(){
    const res=await getUpd();
    const data=await res.json();
    // console.log("from filter server- ",data);
    return json({data:data});
}