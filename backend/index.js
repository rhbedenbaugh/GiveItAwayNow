import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/freeStuffRoutes.js';

const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/freeStuff4UDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//CORS setup
app.use(cors());

routes(app);

app.get('/',(req,res) => 
    res.send(`Give It Away Now app is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Give It Away Now server is running! Check port ${PORT}!`)
);

