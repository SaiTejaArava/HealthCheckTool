
<script>
  import {dmstore} from "../stores/data.js"
  import {store,IP} from "../stores/data.js"
  import Device from "../components/Device.svelte"
  import { json } from "@sveltejs/kit";
  
  let Dids="";
  let ip="";
  let wf=false;
  let cat;
  let devcat=["Embedded Switches","Curtains","Scene Control Switches","Smart Consoles","LED Drivers","Fans","Ir Blaster","Cv Strip","Dimmer","Zigbee Extender"]

  const updateIp=async ()=>{
    const res=await fetch("api/add",{method:'post',body:JSON.stringify({ip}),headers:{'content-type':'application/json'}})
    const data=await res.json();
    window.location.reload();
    console.log(data);
  }

  const filterData=async ()=>{
      let arr=Dids.split(',');
      const res=await fetch('./api/filter',{method:'POST',body:JSON.stringify({arr})});
      let data=await res.json();
      Dids="";
      store.update(()=>data.data.dev);
      dmstore.update(()=>data.data.dmdev);
  }

  const getUpdates=async ()=>{
      const res=await fetch('/api/devcat',{method:'post',body:JSON.stringify({cat,wf})});
      let data=await res.json();
      // console.log(data.data);
      wf=false;
      store.update(()=>data.data.dev);
      dmstore.update(()=>data.data.dmdev);
  }

  $:console.log(Dids);
</script>

<main>
  <div class="form">
    <form on:submit|preventDefault={updateIp} >
      <label for="ip">Enter IP : </label>
      <input id="ip" type="text" bind:value={ip} />
      <button type="submit">connect</button>
    </form>
    <form  on:submit|preventDefault={filterData} >
      <label for="ids">Search by DevideID's :</label>
      <input name="ids" type="text" id="ids" placeholder="  Device-1,Device-2,Device-3,...." bind:value={Dids} />
      <button type="submit">find</button>
    </form>
    <div class="gu">
      <form on:submit|preventDefault >
        <select name="devcat" id="devcat" bind:value={cat} autofocus>
            {#each devcat as cat,i }
              <option value={i+1} >{cat}</option>
            {/each}
            <option value={0}>All Devices</option>
        </select><br />
        <input type="checkbox" id="wf" bind:checked={wf} /> 
        <label for="wf">With Failures</label><br />
        <button  on:click={getUpdates} >fetch</button>
      </form>
    </div>
  </div>
  {#each $store as s,i }
      
  <Device data={s} dmdata={$dmstore[i]} {i}/>
  {:else} <h1>--- No Records Found ---</h1>
  {/each}
</main>
<style>
  .form{
    margin:10px 15px;
    display: flex;
  }
  .form form{
    margin:10px;
  }
  .form input{
    outline: none;
    width: 400px;
    border:1px solid rgba(0,0,0,0.5);
    height:1.5rem;
    border-radius: 6px;
  }
   button{
    margin:5px;
    border:none;
    font-size: 1rem;
    padding:5px 10px;
    border-radius: 6px;
    background-color: rgba(10, 5, 255,0.8);
    color:white;
    letter-spacing: 1.5px;
  }
  button:hover{
    background-color: rgba(50,50,255,0.8);
    cursor: pointer;
    scale:1.05;
  }
  h1{
    text-align: center;
  }
  .gu{
    position: fixed;
    top:100px;
    right:-15px;
    text-align: center;
    line-height: 2;
  }
  .gu form input{
    width:20px;
  }
  .gu form label{
    align-items: center;
    position: relative;
    bottom: 7px;
  }
  .gu select{
    padding:10px;
    font-size: 1rem;
    outline: none;
    border-radius: 6px;
    margin:10px;
    background-color: white;
  }
</style>