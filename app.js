const express = require("express")
const app = express()
const path = require("path")
const methodOverride = require("method-override")
const dotenv = require("dotenv")


dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 3000

let indexRouter = require('./routes/indexRoute');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}))
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use('/', indexRouter);


app.listen(PORT,()=>console.log("server running"))
