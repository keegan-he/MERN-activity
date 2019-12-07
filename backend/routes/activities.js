//require router
const router = require('express').Router();

//require model:
let Activity = require('../models/activity.model');

router.route('/').get((req, res) => {
    Activity.find()
        .then(activities => res.json(activities))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const activity_duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newActivity = new Activity({
        username,
        description,
        activity_duration,
        date,
    });

    newActivity.save()
        .then(() => res.json('Activity Added!'))
        .catch(() => res.status(400).json('Error: ' + err));
});

module.export = router;