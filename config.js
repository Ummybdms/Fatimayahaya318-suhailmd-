const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_35_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxLFxuICAgICAgICA1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICA4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDc1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MCxcbiAgICAgICAgODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICA1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODksXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MyxcbiAgICAgICAgOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInV5cklsenhoaXIzTk84YlhHWkR3SWIwRmVxdit5cjErbDZuVFF6c0lRbWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlYxSk9tTV9FU2FXWUN4WXBzekx3ZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjhhYWY3MGYtZjBjZC00NDM0LWFkZjYtYWUyMjdhZjQzYWY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDE2OSxcbiAgICAgIDIyOCxcbiAgICAgIDM0LFxuICAgICAgMTgwLFxuICAgICAgMTU3LFxuICAgICAgMSxcbiAgICAgIDExMSxcbiAgICAgIDIwOSxcbiAgICAgIDkwLFxuICAgICAgMjMxLFxuICAgICAgMTY4LFxuICAgICAgMjEzLFxuICAgICAgNixcbiAgICAgIDIwNyxcbiAgICAgIDMwLFxuICAgICAgMjMsXG4gICAgICAxOTgsXG4gICAgICAxMDEsXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAyMTIsXG4gICAgICA4MyxcbiAgICAgIDIxNCxcbiAgICAgIDEzMyxcbiAgICAgIDEzNSxcbiAgICAgIDI0OSxcbiAgICAgIDE5OCxcbiAgICAgIDIxNyxcbiAgICAgIDkzLFxuICAgICAgMTEsXG4gICAgICAyMDUsXG4gICAgICAyMzUsXG4gICAgICAxMTUsXG4gICAgICAxNTMsXG4gICAgICA5MyxcbiAgICAgIDcyLFxuICAgICAgMjE4LFxuICAgICAgMTcxLFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlMyS0E1RUJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM5MjM4MjA0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMzgxOTc4ODcyMjI1MzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lTNzFkQUdFTm1Ka2JvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR1BFbmxCNU9teWROTncvQk5wN1NYQUFySlJ1RVVNMThuSWFPcVJ2empBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQc3c4c01OcytpSDdWOWFudFVNRGlzQ3lHbGxmNEd4VmFlY2RvaXd5NmFRWVRZL2dlaGpDSUI4dU9wWVJHditJaWpkekJMdUw0ZS83c3dOK3hLeklCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1YSsrNDFrN1RaanNOVkE4b28raHRUWC9PV1RCWU9rOG1zQmo2SmgwQnFsQ0djaEFpdVFUN2NRdjcxc0hOWWJrUHp4V1FKUWE0Tk5BNFdvRVplby9qZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM5MjM4MjA0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjUyNzMyNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
