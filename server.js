
const express = require('express');
const userRoutes = require('./routes/user.js')



const app = express();
const PORT =  5000;

app.use(express.json());
app.use('/users', userRoutes);



// app is listening
app.listen(PORT, () => {
  console.log(`Server is Running on port http://localhost:${PORT}`);
});
