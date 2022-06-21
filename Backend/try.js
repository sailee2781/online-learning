const fs = require('fs')

const user = {
    Name: 'Sailee Kadam',
    Email: 'sailee.kadam19@vit.edu',
    Password: 'Sai',
    Msg: 'Hi',
  };
var myJsonString = JSON.stringify(user)

fs.writeFile('test.csv', myJsonString, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})