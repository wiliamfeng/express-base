import express from 'express';
import path from 'path';
import connectDB from './config/db';

// Connect to Database
connectDB();

// Init app
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('working');
});

export default app;
