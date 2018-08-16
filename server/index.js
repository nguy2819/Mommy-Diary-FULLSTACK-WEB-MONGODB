import express from 'express';
import routes from './routes/api';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/momdiarygo');
mongoose.Promise = global.Promise;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api', routes);
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

app.get('/api', function(req, res){
    console.log('GET request');
    res.send({name: 'mom-diary'});
});

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});