const {SerialPort} = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline')

console.log("PROGRAM STARTS");

const port = new SerialPort({
  path:'/dev/ttyACM0', 
  baudRate: 9600 
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
parser.on('data', console.log);

// const express = require('express');
// const app = express()
// const port = 5000;

// app.get('/', (req, res) => {
//   res.send('Hello World Z!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })