const fs = require('fs')
const { userInfo } = require('os')
// const book = {
//     title: 'Ibong Adarna',
//     author:  'Jose Rizal'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Jill'
user.age = 22

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)