<script>
  import { faIgloo } from "@fortawesome/free-solid-svg-icons";


    import DD from "../components/dropdown.svelte"

    export let data;
    export let dmdata;
    export let i;
   
    let tsDate=(dmdata.fwInfo && dmdata.fwInfo.timeStamp)? new Date( dmdata.fwInfo.timeStamp):0;
    
    const hw=["UART",   //uart health status
    "DALI",             // DALI
    "I2C_EEPROM",       //eeprom
    "I2C_PORTEXPANDER", //port exapnder
    "I2C_RGB",          //rgb driver
    "SPI_FLASH",        // spi flash health
    "MAC_ACCESS"]       // mac access heqath status

    const rc=[ "POWER_CYCLE" ,
    "HW_FAILURE_UART",
    "HW_FAILURE_DALI",
    "HW_FAILURE_EEPROM",
    "HW_FAILURE_PORTEXPANDER",
    "HW_FAILURE_RGB",
    "HW_FAILURE_SPI_FLASH",
    "HW_FAILURE_MAC_ACCESS",
    "SOFT_RESTART",
    "HARDWARE_RESET",
    "RAM_FAILURE",
    "WD_LIMIT_FAILURE",
    "SOFTWARE_RESET"]


</script>

<main>
    <div class="main">
        <div class="left">
            <div class="img"><img src="https://picsum.photos/200"  height={150} width={150} /></div>
            <div class="info">
                <p> Device ID : {data.deviceId}</p>
                <p>Device Name : {data.deviceName} </p>
                <p>FW Version : {data.firmwareVersion} </p>
                <p>HW Version : {dmdata.fwInfo && dmdata.fwInfo.hwVersion? dmdata.fwInfo.hwVersion:"Not Available"}</p>
                <p>SW Version : {dmdata.fwInfo && dmdata.fwInfo.swVersion? dmdata.fwInfo.swVersion:"Not Available"}</p>
                {#if tsDate===0}
                        <p>TimeStamp : Not Available</p>
                    {:else}
                        <p>TimeStamp : {tsDate.getDate()+"-"+tsDate.getMonth()+"-"+tsDate.getFullYear()+" "+tsDate.getHours()+":"+tsDate.getMinutes()+":"+tsDate.getSeconds()}</p>
                {/if}
                <!-- <p>{i}</p> -->
            </div>
        </div>
        <div class="right">
            {#if (dmdata.fwHealth && dmdata.fwHealth.length>0)}
                {#each dmdata.fwHealth as fh,i }
                <div class="fwh " >
                    <div class="com dinfo {(fh.fwHealth.restartCount_ErrorFlag && fh.fwHealth.restartCount_ErrorFlag===1)? "alert":""} " >
                        <p>BootTime &emsp;&emsp; : {new Date(fh.timeStamp-fh.fwHealth.timeFromBoot).getDate()+"-"+new Date(fh.timeStamp-fh.fwHealth.timeFromBoot).getMonth()+"-"+new Date(fh.timeStamp-fh.fwHealth.timeFromBoot).getFullYear()+" "+new Date(fh.timeStamp-fh.fwHealth.timeFromBoot).getHours()+":"+new Date(fh.timeStamp-fh.fwHealth.timeFromBoot).getMinutes()+":"+(new Date(fh.timeStamp-fh.fwHealth.timeFromBoot).getSeconds())}</p>
                        <p>Restart Count &ensp; &ensp; : <strong>{fh.fwHealth.restartCount}</strong> </p>
                        <h3>{rc[fh.fwHealth.lastResetCause]}</h3>
                    </div>
                    <div class="props dinfo">
                       {#if fh.fwHealth.props}
                            {#each fh.fwHealth.props as prop ,i}
                            <h4>{hw[prop.hwId]} : <span class="ercnt cec {(prop.curr_errCount_flag && prop.curr_errCount_flag===1)? "alert":""}">{prop.currentErrorCount}</span> <span class="ercnt lec {(prop.last_errCount_flag && prop.last_errCount_flag===1)? "alert":""}">{prop.lastErrorCount}</span> <span> <DD  {i} ce={prop.currentErrorCount} le={prop.lastErrorCount} ea={prop.errorActionId} /> </span> </h4>
                            {/each}
                        
                       {/if}
                    </div>
                </div>
            {/each}
            {:else}
                <h4>No Data Available Here</h4>
            {/if}
        </div>
    </div>
</main>

<style>
    p{
        text-align: center;
        padding: auto;
    }
    .ercnt{
        margin:5px;
        box-shadow:inset 0 0 5px rgba(100,100,100,0.3);
        border-radius: 5px;
        padding:3px 10px;
    }
    img{
        border-radius: 6px;
    }
    .img{
        width:60%;
        margin:auto;
        border-bottom: 1px solid rgba(0,0,0,0.5);
    }
    main{
        text-align: center;
    }
    div{
        text-align: center;
        height:auto;
        padding:10px;
    }
    .main{
        min-width: 500px;
        display: flex;
        flex-wrap: wrap;
        width:70%;
        margin:auto;
        height:500px;
        padding:0;
        box-shadow: 1px 1px 4px 2px rgba(100,100,100,0.5);
        border-radius: 10px;
        margin:50px auto;
        position: relative;
    }
    .left{
        flex: 0.35;
    }
    .right{
        /* background-color: red; */
        padding: 20px;
        flex:0.65;
        border:1px solid rgba(100,100,100,0.2);
        margin:40px 20px 40px 0;
        box-shadow: inset 0 0 5px rgba(100,100,100,0.1);
        border-radius: 6px;
        height:80%;
        overflow-y: auto;
        position: relative;
    }
    .info{
        text-align: left;
        height:50%;
    }
    
    .alert{
        border:2px solid red;
        box-shadow: 0 0 5px 3px rgba(200,100,100,0.5);
        /* animation:alt 500ms infinite linear; */
    }

    @keyframes alt{
        0%{
            
            box-shadow: 0 0 5px 3px rgba(250,100,100,0.8);
        }
        50%{
            box-shadow: none;
        }
        100%{
            box-shadow: 0 0 5px 3px rgba(250,100,100,0.8);
        }
    }

    .dinfo > p,.dinfo > h4{
        text-align: left;
    }
    .dinfo{
        line-height: 0.3;
    }
    .fwh{
        margin:20px auto;
        display: flex;
        flex-wrap: wrap;
        border-radius: 6px;
        box-shadow: 1px 2px 3px 2px rgba(100,100,100,0.2);
        flex-direction: row-reverse;
        justify-content: space-between;
        position: relative;
        padding:0;
        overflow: hidden;
    }
    .props{
        margin:0;
        display: inline-block;
        line-height: 1.5;
    }
    .com{
        border-radius: 6px;
        background-color: rgba(100,100,150,0.1);
        padding: 15px;
        padding-top: 25px;
        line-height: 1.5;
        position: relative;
        margin:3px;
    }
    .clear{
        position: absolute;
        bottom: 5px;
        left:40%;
    }
    .lec{
        color:rgba(200,0,0,1);
    }
    .cec{
        color:rgba(0,0,200,1);
    }
</style>