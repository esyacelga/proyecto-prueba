const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./database/config')
const app = express();

app.use(cors());
app.use(express.json());
dbConnection();
app.use('/api/persona', require('./routes/route-persona'));




app.listen(process.env.PORT, () => {
    console.log('Servidor por el puesto :  ' + process.env.PORT);

})
