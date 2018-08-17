'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var MomDiarySchema = new Schema({
    week: {
        type: String,
        required: [true, 'Week field is required']
    },
    title: {
        type: String,
        required: [true, 'Title filed is required']
    },
    content: {
        type: String,
        required: [true, 'Diary field is required']
    }
});

var MomDiary = _mongoose2.default.model('momdiary', MomDiarySchema);

exports.default = MomDiary;