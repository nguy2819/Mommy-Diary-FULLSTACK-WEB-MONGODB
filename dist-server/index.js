'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost/momdiarygo');
_mongoose2.default.Promise = global.Promise;

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'DELETE, POST, GET, PUT');
    next();
});

app.use('/api', _api2.default);
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

app.get('/api', function (req, res) {
    console.log('GET request');
    res.send({ name: 'mom-diary' });
});

app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests');
});