const GoogleSpreadsheet = require("google-spreadsheet")
const creds = require('./client-env.json')

const doc = new GoogleSpreadsheet('139IWhxAuGHyLtapmzzbVygnP-sgnz0ihLjRQtX5dSKg');

async function setAuth() {
  doc.useServiceAccountAuth(creds, getInfo)
}

function getInfo() {
  doc.getInfo(function (err, info) {
    console.log(info);
  })
}

setAuth()
