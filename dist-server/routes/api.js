'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _momdiary = require('../models/momdiary');

var _momdiary2 = _interopRequireDefault(_momdiary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/momdiaries', async function (req, res) {
    console.log('Getting diaries');
    var diaries = await _momdiary2.default.find({}).exec();
    console.log('diaries are: ', diaries);
    res.send(diaries);
});

router.post('/momdiaries', function (req, res, next) {
    console.log('posting info', req.body);
    _momdiary2.default.create(req.body).then(function (momdiary) {
        ;
        res.send({ momdiary: momdiary });
    }).catch(next);
});

router.delete('/momdiaries/:id', function (req, res, next) {
    console.log('deleting');
    _momdiary2.default.findByIdAndRemove({ _id: req.params.id }).then(function (momdiary) {
        res.send(momdiary);
    });
});

router.put('/momdiaries/:id', function (req, res, next) {
    _momdiary2.default.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        _momdiary2.default.findOne({ _id: req.params.id }).then(function (momdiary) {
            res.send(momdiary);
        });
    });
});

exports.default = router;