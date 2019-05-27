const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/coin');
const secret = process.env.SECRET || "some secret passphrase here for local development"
const CapBit = require('./models/info');
require("dotenv").config()
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client","build")));

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(cors({
  methods: ['GET','POST','PUT','PATCH'],
  credentials: true, origin: true,
}))
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

  // res.header("Access-Control-Allow-Origin","*");
  // res.header(
      
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept , Authorization"  
  // );
  // if(req.method === "OPTIONS"){
  //     res.header('Access-Control-Allow-Methods',"GET,PUT,POST,PATCH,DELETE");
  //     return res.status(200).json({});
  // }
  // next();
})


  app.use(allowCrossDomain);

app.use("/info",router);
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,"client","build","index.html"));
});
const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);


mongoose.connect('mongodb://localhost/abc' ,{ useMongoClient: true });
mongoose.Promise = global.Promise;




