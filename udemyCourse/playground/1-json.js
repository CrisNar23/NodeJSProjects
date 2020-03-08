const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Christian'
data.age = 27

const newInfo = JSON.stringify(data)
fs.writeFileSync('1-json.json', newInfo)

