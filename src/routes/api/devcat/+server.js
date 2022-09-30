/**@type {import('./$types').RequestHandler} */
import {getUpd} from "$lib/index"
import { json } from '@sveltejs/kit';

export async function POST({request}){
    const {cat,wf}=await request.json();
    const res=await getUpd(cat,wf);
    const data=await res.json();
    // console.log("from devcat server- ",data)
    return json({data:data});
}