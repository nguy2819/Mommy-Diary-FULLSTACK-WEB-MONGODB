import express from 'express';
import MomDiary from '../models/momdiary';

const router = express.Router();

router.get('/momdiaries', async function(req, res){
    console.log('Getting diaries');
    const diaries = await MomDiary.find({}).exec();
    console.log('diaries are: ', diaries);
    res.send(diaries);
});

router.post('/momdiaries', function(req, res, next){
    console.log('posting info', req.body);
    MomDiary.create(req.body).then(function(momdiary){;
    res.send({momdiary});
}).catch(next);
});

router.delete('/momdiaries/:id', function(req, res, next){
    console.log('deleting')
    MomDiary.findByIdAndRemove({_id: req.params.id}).then(function(momdiary){
        res.send(momdiary);
    });
});

router.put('/momdiaries/:id', function(req, res, next){
    MomDiary.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        MomDiary.findOne({_id: req.params.id}).then(function(momdiary){
            res.send(momdiary);
        })
        
    });
});

export default router;
