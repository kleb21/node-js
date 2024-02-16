const express = require('express')
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const conn = require('express-myconnection');

const app = express();

//routes import
const userRoutes = require('./routes/users');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// middlewares
app.use(morgan('dev'));
app.use(conn(mysql, {
    host:  'localhost',
    user:  'root',
    password: '',
    port: 3306,
    database: 'crud-nodeJS'
}, 'single'));
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', userRoutes);

//statics files
app.use(express.static(path.join(__dirname, 'public')));

// server

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})