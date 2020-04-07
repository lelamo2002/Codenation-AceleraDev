const answer = require('../answer.json')
const fs = require('fs')
function translate(text, key) {
  return text.replace(/[a-zA-Z]/g, function(x) {
    return String.fromCharCode(x.charCodeAt(0)-key)
  });
};
const translation = {"decifrado": translate(answer.cifrado, answer.numero_casas)};
mytranslation = JSON.stringify(translation, null, 2)
console.log(mytranslation);


