const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


app.get("/data", (req, res)=>{
   const str = [
      {
         "name": "John Doe",
         "age": "45"
      }
   ];
   res.end(JSON.stringify(str));
});

app.listen(5000, ()=>{console.log("server running on 5000")});