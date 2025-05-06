// app.js
const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/3dheart', (req, res) => {
  const heart3D = `
  
      ******        ******
     **********   **********
    ************ ************
   **************************
   **************************
   *************************
    ***********************
     *********************
       *****************
         *************
           *********
            *****
             ***
              *
  `;
  res.send('<pre style="color: #ff69b4; font-family: monospace; line-height: 1.1;">' + heart3D + '</pre>');
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
