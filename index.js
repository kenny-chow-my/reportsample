const path = require('path');
const fs = require('fs');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/download', function(req, res){
  console.log('received request', req.headers);
  const file = __dirname + '/azure_speed_test.pdf';

  const filename = path.basename(file);
  console.log('sending file: ', filename);
  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', 'application/octet-stream');

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))