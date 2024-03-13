// qrGenerator.js
const qr = require('qrcode');

// Function to generate QR code and return the data U
let generateQRCode=async(text)=> {
  try {
    return await qr.toDataURL(text)
  } catch (error) {
    return console.log(error)
  }
}

// Export the function so it can be used in other files
module.exports = generateQRCode;
