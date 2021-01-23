const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direct = true
  constructor(type) {
    if (type === false) {
      this.direct = false
    }
  }
  encrypt(message, key) {
    if(message == undefined || key == undefined) throw new Error('lack of arguments')
    message = message.toUpperCase()
    key = key.toUpperCase()
    //encrypting
    let encryptArr = []
    for (let i = 0, j = 0; i < message.length; i++) {
      if (j == key.length) j = 0
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        // C = (M + K) mod 26
        let c = (message.charCodeAt(i) - 65 + key.charCodeAt(j) - 65) % 26
        encryptArr.push(String.fromCharCode(c + 65))
        j++
      }
      else {
        encryptArr.push(message[i])
      }
    }
    if (!this.direct) encryptArr.reverse()
    return encryptArr.join('')
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) throw new Error('lack of arguments')
    let message = encryptedMessage.toUpperCase()
    key = key.toUpperCase()
    //decrypting
    let decryptArr = []
    for (let i = 0, j = 0; i < message.length; i++) {
      if (j == key.length) j = 0
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        // M = (C - K + 26) mod 26
        let m = ((message.charCodeAt(i) - 65) - (key.charCodeAt(j) - 65) + 26) % 26
        decryptArr.push(String.fromCharCode(m + 65))
        j++
      }
      else {
        decryptArr.push(message[i])
      }
    }
    if (!this.direct) decryptArr.reverse()
    return decryptArr.join('')
  }
}

module.exports = VigenereCipheringMachine;
