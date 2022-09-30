import { json } from "@sveltejs/kit";
import {MongoClient} from "mongodb";
import {store,dmstore} from "../stores/data"
// import {} from "../routes"
/**@type {MongoClient} */

var client;
let ip="localhost";
export const setIp=async (IP)=>{
    if(client && ip!=IP){
        console.log("closing the connection");
        await client.close().then(res=>console.log("closed connection,",ip," res- ",res));
        client.on('connectionClosed',()=>console.log("closed the connection with ",ip));
        ip=IP.trim();
        console.log("new ip ",ip);
        let uri="mongodb://"+ip+":27017";
        client=new MongoClient(uri);
        await client.connect().then(res=>console.log("connection started res- "));
        client.on('connectionCreated',()=>console.log("connected to ",ip));
        
    }
    else ip=IP;
}
export const getcli=async ()=>{
    if(!client){
        let uri="mongodb://"+ip+":27017";
        console.log("Connecting to - ",ip);
        
        client=new MongoClient(uri);
        await client.connect();
        client.on('connectionReady',()=>console.log("connected Succesfully"));
    }
    return client;
}

export const closecon=async ()=>{
    // if(client) client.close();
    return 0;
}


export const getdb=async ()=>{
    const db=(await getcli()).db('Keus');
    // console.log(await db.listCollections().toArray())
    return db}
export const getdev=async ()=>(await getdb()).collection("devices");
export const getdmdev=async ()=>(await getdb()).collection("keusdmdevices");

export const filter=async (arr)=>{
    // console.log("from connector- ",arr);
    
    const gdev=await getdev();
    const gdm=await getdmdev();
    let dev=await gdev.find({_id:{$in:arr}}).toArray();
    let dmdev=await gdm.find({_id:{$in:arr}}).toArray();

    let data={
        dev:dev,
        dmdev:dmdev
    }
    return json(data);
}

export const getUpd=async (cat,wf)=>{
    const gdev=await getdev();
    const gdm=await getdmdev();
    let flag=[{"fwHealth.fwHealth.props.curr_errCount_flag":1},{"fwHealth.fwHealth.props.last_errCount_flag":1},{"fwHealth.fwHealth.restartCount_ErrorFlag":1}];

    let dmdev;
    
    if(cat=="0"){
        if(wf){
            dmdev=await gdm.find({$or:flag}).toArray();
        }
        else {
            dmdev=await gdm.find({}).toArray();
        }
    }else{
        if(wf){
            dmdev=await gdm.find({deviceCategory:cat,$or:flag}).toArray();
        }
        else{
            dmdev=await gdm.find({deviceCategory:cat}).toArray();
        }
    }
    let ids=[];
    dmdev.forEach(o=>ids.push(o._id));
    let dev=await gdev.find({_id:{$in:ids}}).toArray();
    // console.log("from index- ",dmdev)
    return json({dev:dev,dmdev:dmdev});
}

