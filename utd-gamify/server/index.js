const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/index",(req,res)=>{
    res.json({message:"hello world"});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});