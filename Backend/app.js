const express = require('express');
const cors = require('cors')
require('dotenv').config();
require('./config/db.js')


const app = express();

// view engine setup
const userRoute = require('./routes/user.route')
const roleRoute = require('./routes/role.route')
const teamRoute = require('./routes/team.route')
const coutomerRoute = require('./routes/customer.route')
app.use(cors())
app.use(express.json());

app.use('/user', userRoute); 
app.use('/role', roleRoute); 
app.use('/team', teamRoute); 
app.use('/customer', coutomerRoute); 




const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

