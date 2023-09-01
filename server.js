
const express = require('express');
const userRoutes = require('./routes/user.js')



const app = express();
const PORT =  5000;

app.use(express.json());
app.use('/users', userRoutes);


app.get("/test", (req,res) =>{
  
  res.send("we are testing")

})


app.get("/", (req, res) => {
  res.send(" hello tehniyat Fatima");
  console.log("server is runing");
});


app.listen(PORT, () => {
  console.log(`Server is Running on port http://localhost:${PORT}`);
});
