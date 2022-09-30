import { writable } from "svelte/store";
export const IP=writable("192.168.100.2");
// export const setData={}


 const store=writable([
    {
        "deviceId": "0x00124b00238dc500",
        "masterId": "",
        "firmwareVersion": "1",
        "deviceType": "KZIRB01",
        "deviceCategory": "KZIRB",
        "deviceTypeName": "Keus_Zigbee_IR_Blaster",
        "deviceName": "Conference",
        "deviceTypeDisplayName": "Keus ZIRB",
        "manufacturerName": "-",
        "isConfigured": true,
        "isHidden": false,
        "deviceLocation": "Wall",
        "deviceSection": "Default",
        "deviceRoom": "02zasqVv5W",
        "deviceControlType": "ZIGBEE",
        "deviceParent": "",
        "deviceProperties": {
            "blastSignalDelay": 1
        },
        "inGroup": false,
        "deviceGroup": -1,
        "groupRoom": "Home",
        "lastUpdateTime": 1640778153819,
        "lastUpdateBy": "+919999999999",
        "lastUpdateSource": "SYS",
        "lastUpdateUser": "System",
        "deviceSyncInfo": {
            "syncRequestId": "-",
            "syncRequestTime": 1640778153819,
            "syncRequestType": 0,
            "syncStatus": 0
        },
        "markedForDelete": 0,
        "__v": 0
    },
    {
        "deviceId": "0x00124b0021b708d3",
        "masterId": "OkJcpztv",
        "firmwareVersion": "1",
        "deviceType": "KZIRB01",
        "deviceCategory": "KZIRB",
        "deviceTypeName": "Keus_Zigbee_IR_Blaster",
        "deviceName": "HW_CoFounder",
        "deviceTypeDisplayName": "Keus ZIRB",
        "manufacturerName": "-",
        "isConfigured": true,
        "isHidden": false,
        "deviceLocation": "Wall",
        "deviceSection": "Default",
        "deviceRoom": "8BOTZWn9rM",
        "deviceControlType": "ZIGBEE",
        "deviceParent": "",
        "deviceProperties": {
            "blastSignalDelay": 1
        },
        "inGroup": false,
        "deviceGroup": -1,
        "groupRoom": "Home",
        "lastUpdateTime": 1640784821315,
        "lastUpdateBy": "+919999999999",
        "lastUpdateSource": "SYS",
        "lastUpdateUser": "System",
        "deviceSyncInfo": {
            "syncRequestId": "-",
            "syncRequestTime": 1640784821315,
            "syncRequestType": 0,
            "syncStatus": 0
        },
        "markedForDelete": 0,
        "__v": 0
    },
    {
        "deviceId": "0x00124b00238d3012",
        "masterId": "OkJcpztv",
        "firmwareVersion": "1",
        "deviceType": "KZIRB01",
        "deviceCategory": "KZIRB",
        "deviceTypeName": "Keus_Zigbee_IR_Blaster",
        "deviceName": "HW R&D",
        "deviceTypeDisplayName": "Keus ZIRB",
        "manufacturerName": "-",
        "isConfigured": true,
        "isHidden": false,
        "deviceLocation": "Wall",
        "deviceSection": "Default",
        "deviceRoom": "I2PupA5oMR",
        "deviceControlType": "ZIGBEE",
        "deviceParent": "",
        "deviceProperties": {
            "blastSignalDelay": 1
        },
        "inGroup": false,
        "deviceGroup": -1,
        "groupRoom": "Home",
        "lastUpdateTime": 1640784880562,
        "lastUpdateBy": "+919999999999",
        "lastUpdateSource": "SYS",
        "lastUpdateUser": "System",
        "deviceSyncInfo": {
            "syncRequestId": "-",
            "syncRequestTime": 1640784880562,
            "syncRequestType": 0,
            "syncStatus": 0
        },
        "markedForDelete": 0,
        "__v": 0
    },
    {
        "deviceId": "0x00124b0022a4fb93",
        "masterId": "OkJcpztv",
        "firmwareVersion": "1",
        "deviceType": "KZIRB01",
        "deviceCategory": "KZIRB",
        "deviceTypeName": "Keus_Zigbee_IR_Blaster",
        "deviceName": "HW_Ops",
        "deviceTypeDisplayName": "Keus ZIRB",
        "manufacturerName": "-",
        "isConfigured": true,
        "isHidden": false,
        "deviceLocation": "Wall",
        "deviceSection": "Default",
        "deviceRoom": "CrHrKpLwBo",
        "deviceControlType": "ZIGBEE",
        "deviceParent": "",
        "deviceProperties": {
            "blastSignalDelay": 1
        },
        "inGroup": false,
        "deviceGroup": -1,
        "groupRoom": "Home",
        "lastUpdateTime": 1640785116961,
        "lastUpdateBy": "+919999999999",
        "lastUpdateSource": "SYS",
        "lastUpdateUser": "System",
        "deviceSyncInfo": {
            "syncRequestId": "-",
            "syncRequestTime": 1640785116961,
            "syncRequestType": 0,
            "syncStatus": 0
        },
        "markedForDelete": 0,
        "__v": 0
    },
    
    {
        "deviceId": "0x00124b002377e2df",
        "masterId": "",
        "firmwareVersion": "1",
        "deviceType": "KZIRB01",
        "deviceCategory": "KZIRB",
        "deviceTypeName": "Keus_Zigbee_IR_Blaster",
        "deviceName": "CoF",
        "deviceTypeDisplayName": "Keus ZIRB",
        "manufacturerName": "-",
        "isConfigured": true,
        "isHidden": false,
        "deviceLocation": "Desk",
        "deviceSection": "GULnpymn27",
        "deviceRoom": "5xRbkAsQ99",
        "deviceControlType": "ZIGBEE",
        "deviceParent": "",
        "deviceProperties": {
            "blastSignalDelay": 1
        },
        "inGroup": false,
        "deviceGroup": -1,
        "groupRoom": "Home",
        "lastUpdateTime": 1648195957216,
        "lastUpdateBy": "+919999999999",
        "lastUpdateSource": "SYS",
        "lastUpdateUser": "System",
        "deviceSyncInfo": {
            "syncRequestId": "-",
            "syncRequestTime": 1648195957217,
            "syncRequestType": 0,
            "syncStatus": 0
        },
        "markedForDelete": 0,
        "registeredAt": 1648195957217,
        "__v": 0
    }
]);

const dmstore=writable([{
    "baseDeviceType": "ZD",
    "deviceId": "0x00124b00238dc500",
    "minigatewayId": "",
    "shortAddr": 44672,
    "deviceType": 1,
    "deviceCategory": 7,
    "firmwareVersion": "1",
    "registeredTimestamp": 1640778153748,
    "lastSentMsg": 1640778153748,
    "lastReceivedMsg": 1640778153748,
    "areaId": 12,
    "areaMemberAddr": 2,
    "isAreaServer": false,
    "isDaliMaster": false,
    "__v": 0,
    "deviceProperties": {
        "remotes": [{
            "companyId": "TSHB",
            "modelId": "office",
            "remoteName": "AC",
            "remoteType": 0,
            "remoteVersion": "",
            "configIds": [1, 2]
        }, {
            "companyId": "SNY",
            "modelId": "RM_GD027",
            "remoteName": "Tv",
            "remoteType": 1,
            "remoteVersion": "",
            "configIds": [3]
        }, {
            "companyId": "CRRR",
            "modelId": "R05_BGE",
            "remoteName": "Carr",
            "remoteType": 0,
            "remoteVersion": "",
            "configIds": [4]
        }]
    },
    "isFactoryNew": false,
    "fwHealth": [{
        "fwHealth": {
            "timeFromBoot": 8939,
            "lastResetCause": 0,
            "restartCount": 41,
            "props": [{
                "hwId": 2,
                "lastErrorCount": 0,
                "currentErrorCount": 0,
                "errorActionId": 0
            }, {
                "hwId": 6,
                "lastErrorCount": 1,
                "currentErrorCount": 0,
                "errorActionId": 0
            }]
        },
        "timeStamp": 1653039832147
    }],
    "fwInfo": {
        "timeStamp": 1653646093643,
        "hwVersion": "1.1",
        "swVersion": "2.18",
        "deviceName": "K_IR_CoF",
        "hgmSetting": 1,
        "bleSetting": 0
    }
},
{
    "baseDeviceType": "ZD",
    "deviceId": "0x00124b0021b708d3",
    "minigatewayId": "OkJcpztv",
    "shortAddr": 16756,
    "deviceType": 1,
    "deviceCategory": 7,
    "firmwareVersion": "1",
    "registeredTimestamp": 1640784821215,
    "lastSentMsg": 1640784821215,
    "lastReceivedMsg": 1640784821215,
    "areaId": 14,
    "areaMemberAddr": 1,
    "isAreaServer": false,
    "isDaliMaster": false,
    "__v": 0,
    "deviceProperties": {
        "remotes": [{
            "companyId": "DKN",
            "modelId": "ARC484A6",
            "remoteName": "AC",
            "remoteType": 0,
            "remoteVersion": "",
            "configIds": [1]
        }]
    },
    "fwHealth": [{
        "fwHealth": {
            "timeFromBoot": 160360,
            "lastResetCause": 0,
            "restartCount": 39,
            "props": [{
                "hwId": 2,
                "lastErrorCount": 0,
                "currentErrorCount": 0,
                "errorActionId": 0
            }, {
                "hwId": 6,
                "lastErrorCount": 0,
                "currentErrorCount": 0,
                "errorActionId": 0
            }]
        },
        "timeStamp": 1653039691940
    }],
    "fwInfo": {
        "timeStamp": 1653646041626,
        "hwVersion": "1.1",
        "swVersion": "2.18",
        "deviceName": "K_IR_Manish",
        "hgmSetting": 0,
    "bleSetting": 0
}
},
{
"baseDeviceType": "ZD",
"deviceId": "0x00124b00238d3012",
"minigatewayId": "OkJcpztv",
"shortAddr": 2460,
"deviceType": 1,
"deviceCategory": 7,
"firmwareVersion": "1",
"registeredTimestamp": 1640784880494,
"lastSentMsg": 1640784880494,
"lastReceivedMsg": 1640784880494,
"areaId": 15,
"areaMemberAddr": 1,
"isAreaServer": false,
"isDaliMaster": false,
"__v": 0,
"deviceProperties": {
    "remotes": [{
        "companyId": "DKN",
        "modelId": "ARC484A6",
        "remoteName": "AC",
        "remoteType": 0,
        "remoteVersion": "",
        "configIds": [1]
    }]
},
"fwHealth": [{
    "fwHealth": {
        "timeFromBoot": 100159,
        "lastResetCause": 0,
        "restartCount": 47,
        "props": [{
            "hwId": 0,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }, {
            "hwId": 1,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        },
        {
            "hwId": 2,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }, {
            "hwId": 3,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        },{
            "hwId": 4,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }, {
            "hwId": 5,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        },{
            "hwId": 6,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }, {
            "hwId": 2,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }]
    },
    "timeStamp": 1653039692112
},
{
    "fwHealth": {
        "timeFromBoot": 71469,
        "lastResetCause": 0,
        "restartCount": 50,
        "props": [{
            "hwId": 2,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }, {
            "hwId": 6,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }]
    },
    "timeStamp": 1653039692322
},
{
    "fwHealth": {
        "timeFromBoot": 71469,
        "lastResetCause": 0,
        "restartCount": 50,
        "props": [{
            "hwId": 2,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }, {
            "hwId": 6,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }]
    },
    "timeStamp": 1653039692322
}],
"fwInfo": {
    "timeStamp": 1653646041829,
    "hwVersion": "1.1",
    "swVersion": "2.17",
    "deviceName": "K_IR_HWRnD",
    "hgmSetting": 1,
    "bleSetting": 0
}
},
{
"baseDeviceType": "ZD",
"deviceId": "0x00124b0022a4fb93",
"minigatewayId": "OkJcpztv",
"shortAddr": 3616,
"deviceType": 1,
"deviceCategory": 7,
"firmwareVersion": "1",
"registeredTimestamp": 1640785116882,
"lastSentMsg": 1640785116882,
"lastReceivedMsg": 1640785116882,
"areaId": 13,
"areaMemberAddr": 2,
"isAreaServer": false,
"isDaliMaster": false,
"__v": 0,
"deviceProperties": {
    "remotes": [{
        "companyId": "TSHB",
        "modelId": "office",
        "remoteName": "Toshiba",
        "remoteType": 0,
        "remoteVersion": "",
        "configIds": [1, 2]
    }]
},
"fwHealth": [{
    "fwHealth": {
        "timeFromBoot": 71469,
        "lastResetCause": 0,
        "restartCount": 50,
        "props": [{
            "hwId": 2,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }, {
            "hwId": 6,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }]
    },
    "timeStamp": 1653039692322
},
{
    "fwHealth": {
      "timeFromBoot": 233372,
      "lastResetCause": 0,
      "restartCount": 216,
      "reatartCount_Error" : 0,
      "props": [
        {
          "hwId": 2,
          "lastErrorCount":1,
          "currentErrorCount": 7,
          "errorActionId": 0,
          "lastErrorCount_flag": 1,
          "curr_error_flag": 1
        },
        {
          "hwId": 6,
          "lastErrorCount": 0,
          "currentErrorCount": 8,
          "errorActionId": 0,
          "lastErrorCount_flag": 0,
          "curr_error_flag": 1
        }
      ]
    },
    "timeStamp": 1653039579520
  },
  {
    "fwHealth": {
      "timeFromBoot": 2000,
      "lastResetCause": 0,
      "restartCount": 217,
      "reatartCount_Error" : 1,
      "props": [
        {
          "hwId": 2,
          "lastErrorCount": 9,
          "currentErrorCount": 1,
          "errorActionId": 0,
          "lastErrorCount_flag": 1,
          "curr_error_flag": 1
        },
        {
          "hwId": 6,
          "lastErrorCount": 8,
          "currentErrorCount": 1,
          "errorActionId": 0,
          "lastErrorCount_flag": 0,
          "curr_error_flag": 1
        }
      ]
    },
    "timeStamp": 1653039598741
  }],
"fwInfo": {
    "timeStamp": 1653646042045,
    "hwVersion": "1.1",
    "swVersion": "2.18",
    "deviceName": "K_IR_HWOps",
    "hgmSetting": 1,
    "bleSetting": 0
}
},
{
"baseDeviceType": "ZD",
"deviceId": "0x00124b002377e2df",
"minigatewayId": "",
"shortAddr": 29634,
"deviceType": 1,
"deviceCategory": 7,
"firmwareVersion": "1",
"registeredTimestamp": 1648195957130,
"lastSentMsg": 1648195957130,
"lastReceivedMsg": 1648195957130,
"areaId": 10,
"areaMemberAddr": 3,
"isAreaServer": false,
"isDaliMaster": false,
"isFactoryNew": false,
"__v": 0,
"deviceProperties": {
    "remotes": [{
        "companyId": "BNQ",
        "modelId": "RCV015",
        "remoteName": "proj",
        "remoteType": 3,
        "remoteVersion": "",
        "configIds": [3]
    }, {
        "companyId": "NTHM",
        "modelId": "RCM_MRX2",
        "remoteName": "amp",
        "remoteType": 2,
        "remoteVersion": "",
        "configIds": [4]
    }, {
        "companyId": "CRRR",
        "modelId": "RG56CMI_B0",
        "remoteName": "Carrier",
        "remoteType": 0,
        "remoteVersion": "",
        "configIds": [5]
    }, {
        "companyId": "TSHB",
        "modelId": "office",
        "remoteName": "Cof Ac",
        "remoteType": 0,
        "remoteVersion": "",
        "configIds": [1, 2]
    }]
},
"fwHealth": [{
    "updated":true,
    "fwHealth": {
        "timeFromBoot": 8939,
        "lastResetCause": 0,
        "restartCount": 41,
        "props": [{
            "hwId": 2,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }, {
            "hwId": 6,
            "lastErrorCount": 1,
            "currentErrorCount": 0,
            "errorActionId": 0
        },
        {
            "hwId": 2,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }, {
            "hwId": 6,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }]
    },
    "timeStamp": 1653039832147
},
{
    "updated":true,
    "fwHealth": {
        "timeFromBoot": 71469,
        "lastResetCause": 0,
        "restartCount": 50,
        "props": [{
            "hwId": 2,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }, {
            "hwId": 6,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        },
        {
            "hwId": 2,
            "lastErrorCount": 0,
            "currentErrorCount": 0,
            "errorActionId": 0
        }, {
            "hwId": 6,
            "lastErrorCount": 1,
            "currentErrorCount": 0,
            "errorActionId": 0
        }]
    },
    "timeStamp": 1653039692322
}],
"fwInfo": {
    "timeStamp": 1653646093643,
    "hwVersion": "1.1",
    "swVersion": "2.18",
    "deviceName": "K_IR_CoF",
    "hgmSetting": 1,
    "bleSetting": 0
}
}])

export {store,dmstore};