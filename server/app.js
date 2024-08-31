require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const Film = require('./models/Film');
const filmRoute = require('./routes/film');
const userRoute = require('./routes/user');

const app = express();

const corsOption = {
  origin: 'http://localhost:3000',
  credentials: true,
}
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));

// Middleware
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser({
  sameSite:'None',
}));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// });

// Routes
app.use('/api/users', userRoute);
app.use('/api/films', filmRoute);



module.exports = app;
