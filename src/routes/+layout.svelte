<script>
  import { dmstore, store } from "../stores/data";
    import {onMount} from "svelte"
  
   const displayData=async ()=>{
    const res = await fetch('/api/add');
  let data=await res.json();
  // console.log("DATA-",data);

  let dev=[];
  let dm=[];
  let j=0;
  // console.log(data.devices.length)
  
  for(let i=0;i<data.devices.length;i++){
    dev.push(data.devices[i]);
    while(data.devices[i].deviceId!==data.dmdevices[j].deviceId){
      j++;
    }
    dm.push(data.dmdevices[j]);
  }
  // console.log(dev.length," ",dm.length);
  // console.log(dev);
  // console.log(dm);
  store.update(()=>[...dev]);
  dmstore.update(()=>[...dm]);
  }

    onMount(async ()=>{
        displayData();
  })
</script>

<main>
    <div>DEVICE LIST</div>
    <slot></slot>
</main>

<style>
    div{
        text-align: center;
        position: relative;
        background-color: rgba(5, 5, 255,0.8);
        height: 60px;
        width:100%;
        padding:20px;
        font-size: 3rem;
        color:#fff;
        letter-spacing: 2px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 700;
    }
</style>