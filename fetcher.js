const args = process.argv.slice(2)

const url = args[0].toString()
const destination = args[1].toString()

// console.log(url)
// console.log(destination)


const request = require ('request');
const fs = require('fs');

request (url, (error, response, body) => {
  console.log ('error:', error);
  console.log ('statusCode:', response && response.statusCode);
  console.log ('body: ', body);

  fs.writeFile (destination, body, (err) => {
    if (err) throw err;
    console.log("Downloaded and saved to " + destination);
  });

});



