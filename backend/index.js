import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/freeStuffRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;
const uri = "mongodb+srv://memories:memories123@memories.nv7di.mongodb.net/Cluster0?retryWrites=true&w=majority";

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
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
    console.log(`Give It Away Now server is running!`)
);

