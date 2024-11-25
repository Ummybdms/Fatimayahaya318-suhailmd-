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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347083923290";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_08_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM5LFxuICAgICAgICA4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICA3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAzNixcbiAgICAgICAgMzksXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMUzlwTDlYblhaZnBkY2lGTGNkdUZveUV3MGU4U1V6TXozcVp0SXQ1bjlvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZMkV5d25QclN4YUE4T0g4VHdEU1l3XCIsXG4gIFwicGhvbmVJZFwiOiBcImUyYmU4ZjhlLTI1YjUtNGMyMy1iZWNiLWMzMTFjYjVhZGRiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDcyLFxuICAgICAgMjE5LFxuICAgICAgMTcsXG4gICAgICAxODEsXG4gICAgICA1NSxcbiAgICAgIDk0LFxuICAgICAgNzMsXG4gICAgICA1NixcbiAgICAgIDIwMixcbiAgICAgIDIxMSxcbiAgICAgIDkyLFxuICAgICAgMTkyLFxuICAgICAgNDIsXG4gICAgICAxNzcsXG4gICAgICAyNDAsXG4gICAgICAyMjQsXG4gICAgICAxOTAsXG4gICAgICAyMTksXG4gICAgICA4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDYsXG4gICAgICAxNjMsXG4gICAgICAxODAsXG4gICAgICAxNTAsXG4gICAgICA3OCxcbiAgICAgIDE3OSxcbiAgICAgIDc2LFxuICAgICAgMzgsXG4gICAgICAxMDMsXG4gICAgICAxNzksXG4gICAgICAxOTYsXG4gICAgICAxMyxcbiAgICAgIDU2LFxuICAgICAgNTUsXG4gICAgICA0NCxcbiAgICAgIDI1MSxcbiAgICAgIDEzMSxcbiAgICAgIDU3LFxuICAgICAgMTc3LFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBMNVBBTTdNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDgzOTIzMjkwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJmYXRpbWF5YWhheWEzMThcIixcbiAgICBcImxpZFwiOiBcIjM1NzA4Nzc3NTY2MjE3OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU9vME5rREVLMnlrN29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQZElsZ2N4RndyanFuRzZKNUxJTis0dzRjSDVxSzVuYmpja3ZKZE8vaUdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInovRW5VTmhPZHlTeGZKTk0zS1IzbWU4cXJXN0VKMjAvM0JLVDNOekJHV01hRzVOZ3NDemFnWU94NndWczRIY3Y5NmRIRy90NW81MXRqSTNpVG9WZUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkE1bDNwUk1PMjNjMFZuVVF3ZXlibk51cHZBd2J5TER1NmtFSnFGL0F2YnNwQlVVK2U3dSsxd1BEanNtQW5jZFJKYnFPNkszY2FLZlVmNzYwUDFRNEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODM5MjMyOTA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI1NjUyOTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGRWJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZFYi5qc29uIjogIntcImtleURhdGFcIjpcIitEc1IyQXJKTnJIQkxFVjBHVG5pdjBKbWlFN2JyN2JXU1FEL2t4NnZnelk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTkzMjY4ODAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEzMDk5OTc0MzJcIn0iCn0="  // PUT your SESSION_ID 


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
