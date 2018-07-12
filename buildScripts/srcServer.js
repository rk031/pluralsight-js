// here we use the "Express" web server. It is a local web server.

var express = require('express');      // call express
var path = require('path');            // need a reference to path
var open = require('open');            // need a reference to open which is used to open our site in the browser.

var port = 3000;      // any port number 
var app = express(); // creat an instant of express and set it into a variable.

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

/* tell express which route it should handle --  "app.get()"
  -- Here we specified any reference to the root(/) will bw handled by the above specified function. 
    function(request,response)

    -- here express coming in and seeing we are requesting the root and sending the file we are spcified,
       and opening the site at the below address(localhost) and the port address. 
  
  */


  app.listen(port, function(err) {             // error handling code
      if (err) {
          console.log(err);
      } else {
          open('http://localhost:' +port);
        // console.log('done');                     //works
        // alert("done by alert");                   // not works
      }
  });

// app.listen(port, open('http://localhost:' +port));         // works