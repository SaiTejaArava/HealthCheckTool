<script>
    import Fa from "svelte-fa";
    import {faInfoCircle} from "@fortawesome/free-solid-svg-icons"
    export let ce=0;
    export let le=0;
    export let ea=0;
    export let i=0;
    let hov=false;
</script>

<div class="main">
    <div class="ddicon" on:mouseover={()=>{if(!hov) hov=!hov}} on:mouseleave={()=>{if(hov) hov=!hov}} ><Fa icon={faInfoCircle} size="1.2x" /></div>
    {#if hov}
    <div class="dd" style="{i>=2? 'left:-500%;bottom:100%':'top:100%;left:-500%'}">
        <p>Current Error Count : <span class="cec">{ce}</span> </p>
        <p>Last Error Count &emsp: <span class="lec">{le}</span></p>
        <p> Error Action ID : {ea}</p>
    </div>
    {/if}
</div>

<style>
    .ddicon{
        cursor: pointer;
    }
    .lec{
        color:rgba(200,0,0,1);
    }
    .cec{
        color:rgba(0,0,200,1);
    }
    .main{
        position: relative;
        display: inline-block;
    }
    
    .dd{
        position:absolute;
        
        width:200px;
        z-index: 10000;
        background-color: #fff;
        border-radius: 10px;
        padding: 5px 10px;
        box-shadow: inset 0 0 5px 1px rgba(100,100,100,0.1);
        line-height: 0.7;
        border:1px solid rgba(100,100,100,0.2)
    }
</style>