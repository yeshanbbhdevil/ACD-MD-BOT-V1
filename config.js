const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ndNnALSR#msNJIZ-N2w5qTqW6mQgoWzQNVEC8PlBh3joeGlXlgns",  //මෙතනට ඔයාගෙ සෙශන් කෝඩ් එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/hLGPJ0W/IMG-20241201-WA0167.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*HEY DEAR* ${pushname}\n *I Am AlIVE NOW....! 🖐🏻*",
SUDO_NB: process.env.SUDO_NB || "94701219309",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

