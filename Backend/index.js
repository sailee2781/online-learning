var express = require('express')
var cors = require('cors')
var app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const jsonexport = require('jsonexport');
const os = require("os");

app.use(jsonParser); // use it globally
app.use(cors())
//const express = require('express')
//const app = express()
const port = 8090
const csv = require('csv-parser');
const fs = require('fs');

app.get('/programming_courses', (req, res) => {
  const results = [];

  fs.createReadStream('course.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      res.json(results)
    });
})
app.get('/ml_courses', (req, res) => {
  const results = [];

  fs.createReadStream('mlcourses.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      res.json(results)
    });
})
app.get('/What_we_offer', (req, res) => {
  const results = [];

  fs.createReadStream('offer.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      res.json(results)
    });
})
app.get('/Instructors', (req, res) => {
  const results = [];

  fs.createReadStream('instructors.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      res.json(results)
    });
})
app.get('/students', (req, res) => {
  const results = [];

  fs.createReadStream('student.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      res.json(results)
    });
})


app.get('/programming_courses', (req, res) => {
  res.json([{}])
})

app.post('/contact', function (req, res) {
  
  var myJsonString = JSON.stringify(req.body )
  fs.appendFile('contact.csv', myJsonString+ "\n", err => {
    if (err) {
      console.error(err)
      
      return
    }
    //file written successfully
  })
  console.log(myJsonString)
  console.log(req.body);
  res.send("Details Received");
});
app.post('/register', function (req, res) {
  
  var myJsonString = JSON.stringify(req.body )
  fs.appendFile('register.csv', myJsonString+ "\n", err => {
    if (err) {
      console.error(err)
      
      return
    }
    //file written successfully
  })
  console.log(myJsonString)
  console.log(req.body);
  res.send("Details Received");
});
app.post('/authenticate', function (req, res) {
  console.log(req.body);
  if(req.body.stu.Name == 'Sailee Kadam', req.body.stu.Name == 'sailee.kadam19@vit.edu', req.body.stu.Password == "Sai@123"){
    res.send("Success")
  }
  else{
    res.send("Failure")
  }

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
