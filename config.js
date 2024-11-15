const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919862323982";




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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_42_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MixcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1LFxuICAgICAgICA4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkl3Y3JJeU5OZWRsZFM4Ym14dWh6cHRBclRDMUxCUGFTVnY2aTlRTk9CdE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5ODYyMzIzOTgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MzMwMDlCMjIyQThBMzg4NDc1QTcwMUY1Njg2MzQ5RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE2NjM3NjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk4NjIzMjM5ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM4NTlCRDhCMUYwQjVCMEYyQzJDMTc4Qjk0QzM0MUM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTY2Mzc2NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTg2MjMyMzk4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEQ5MDJCQkY0QkI1RUQyQ0FERkY0Qjc0QkQyQ0ZDNjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNjYzNzY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5ODYyMzIzOTgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MDFBNjc0MjNGOTFGODdGMzYxNzAxQTcwM0Q1Q0Q2Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE2NjM3NjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYjJ4azhnMEpRRmFpZkNWNEQ3UEFBUVwiLFxuICBcInBob25lSWRcIjogXCI0MGFlNTAwMS1iNTQzLTQ3MTYtODMyNS1kZGNlM2I1YmQxNmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAzNyxcbiAgICAgIDEwOSxcbiAgICAgIDUxLFxuICAgICAgMjM1LFxuICAgICAgMTE1LFxuICAgICAgOTQsXG4gICAgICAxNzQsXG4gICAgICAxOTAsXG4gICAgICAzMyxcbiAgICAgIDE3NixcbiAgICAgIDE3NixcbiAgICAgIDYxLFxuICAgICAgMjQ2LFxuICAgICAgNTksXG4gICAgICAxMDQsXG4gICAgICA5MyxcbiAgICAgIDIwNyxcbiAgICAgIDU5LFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDE1MixcbiAgICAgIDEzNSxcbiAgICAgIDIwMyxcbiAgICAgIDIyOSxcbiAgICAgIDE5NCxcbiAgICAgIDk1LFxuICAgICAgMTgyLFxuICAgICAgMTQsXG4gICAgICAxMDUsXG4gICAgICAzNyxcbiAgICAgIDMsXG4gICAgICAyMzIsXG4gICAgICAxODYsXG4gICAgICA5NyxcbiAgICAgIDc5LFxuICAgICAgMTM0LFxuICAgICAgMTgxLFxuICAgICAgMTc4LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTJQdmRJRUVJK3YzTGtHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxczZSU2JGUzN1TTBpTkVEUG5VanRxNkR6Qmo5VUU2cXNYUjR2NEdTYWxrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlY0WTV2aHNLMHE1L2tNQllpMm44NEdKeFFtUWdWL3cxcE9XVkdlYlFhQWFBc0R1MnlXNlZhSVBSQ0hXeTM4b0NBN1ZHWno2RFpZRXBKTjdSdlpLNER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm95Wmd5alBvbzlHU3BoNHpYTDFobWtnbVpnMmsxeWd5WFUya1ltVHVXSVJPUFdWZ0VTdisrd2VkdmFBRzc3UEZwNFh0TEl4dk9XVk9BSzRvZUJKNkJBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5ODYyMzIzOTgyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY1ODcyNDY3MDk5NzUxOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiLlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5ODYyMzIzOTgyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNjYzNzYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRk5lXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGTmUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxTFZEdkkvcGpUVmxMNURVSXlZZkJ5SEVEQ3dLeTZZOXhWb3BrRE5pSFEwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNDY3MDk3MDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTAwNjg5MTQwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "NEXUS",
  ownername:process.env.OWNER_NAME|| "KORON-HN",


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
