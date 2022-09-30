import { json } from '@sveltejs/kit';
 import {getdev,getdmdev,setIp} from "$lib/index"
 

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const {ip}=await request.json();
  await setIp(ip);
  return json({data:"updated ip"});
}

export async function GET(){
    const devicescol=await getdev();
    const dmdevicescol=await getdmdev();
    const devices=await devicescol.find({}).toArray();
    const dmdevices=await dmdevicescol.find({}).toArray();
    // console.log("-----------------------");
    // console.log(devices);
    // console.log("=======================")
    // console.log(dmdevices);
    // console.log("-----------------------");
    // // client.close();
    // client.on('connectionClosed',()=>console.log("closed connection"));
    let data={
      devices:devices,
      dmdevices:dmdevices
    }
    return json(data);
}