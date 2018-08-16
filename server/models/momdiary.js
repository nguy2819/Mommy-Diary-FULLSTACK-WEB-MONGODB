import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MomDiarySchema = new Schema({
    week: {
        type: String,
        required: [true, 'Week field is required'],
    },
    title: {
        type: String,
        required: [true, 'Title filed is required'],
    },
    diary: {
        type: String,
        required: [true, 'Diary field is required'],
    }
});

const MomDiary = mongoose.model('momdiary', MomDiarySchema);

export default MomDiary;