const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_57_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDMyLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgODgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NixcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NixcbiAgICAgICAgMjMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4LFxuICAgICAgICA5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicnRVVFk2SUlVeFg2bEx1WTY3ZEwwZlMvMTFYWVk0WUFGcWNvNG1CSGhiST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTjFRN0t4UGRRTWlWSVltSDZ1ZzROd1wiLFxuICBcInBob25lSWRcIjogXCIyZmU1YWMxZS1mOWM4LTQwZTEtODk4MC1mYTllOTk4YzExOWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTExLFxuICAgICAgNjIsXG4gICAgICAxOTgsXG4gICAgICA1NCxcbiAgICAgIDIwMSxcbiAgICAgIDM5LFxuICAgICAgMTI0LFxuICAgICAgMTc4LFxuICAgICAgNzgsXG4gICAgICAxMTcsXG4gICAgICAxMTMsXG4gICAgICAxOTgsXG4gICAgICAzLFxuICAgICAgNDUsXG4gICAgICAxLFxuICAgICAgMjAzLFxuICAgICAgMTg5LFxuICAgICAgOTIsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICA2OCxcbiAgICAgIDQwLFxuICAgICAgNTYsXG4gICAgICAxOTcsXG4gICAgICAyNDAsXG4gICAgICAxODksXG4gICAgICAyMjAsXG4gICAgICAyNDksXG4gICAgICAxOTcsXG4gICAgICAxMTMsXG4gICAgICA0NixcbiAgICAgIDE2NixcbiAgICAgIDgxLFxuICAgICAgMjI4LFxuICAgICAgODgsXG4gICAgICAyMixcbiAgICAgIDYxLFxuICAgICAgMTUsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMU5HTFlSV0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzcyNTAyODQzOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQF9f4bS04bSs4bS6y6LhtKzhtLfhtKxfX+G0v+G0rOG0uuG0rMui4bS14bS64bS04bSsX18jXCIsXG4gICAgXCJsaWRcIjogXCIxNjEwMjIwMTQ5NTU5NToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYWEyYTBHRU9pLzdiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFlZU5RMzZHNjBMRm1reWJINnBIRi93b0N3Z256WXlPT2tJaEpSZ05kd3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTUhUdGZ5NXBKVlFTbFNRblhFM2pOR00xNjB6UENCWURDNURtd2F5Vk1Cbzc1YXhhQ0dvYzF1aEFuZVpGQVcwTUQ0UTlicHpOeUNuSCtYVEM3SVFlQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQzBxVStqWjQxWHQrc2RzYWtPQURtaWVUS0k5YmdESlFONld0Z3VldTYvZkJNc2ZIQThFUktrbmVIaFU1NTVFajY2a1FBZk5qMG9rdlc4eHpRM2JWRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzI1MDI4NDM6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDU4NjY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTklQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOSVAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnYXlSQzV5bUxGdE15cEZSN1RkdXo5MmlPTlo5RUNuVzY2WDBKVnNNOHQ0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDY0NDYxOTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ1ODY3NDk2NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
