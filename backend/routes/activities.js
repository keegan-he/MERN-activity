//require router
const router = require('express').Router();
//require model:
let Activity = require('../models/activity.model');

//if route is activities/ the Activity.find() Mongoose command will execute and find all the activities from the database and return them in JSON. If err, throw error. 
router.route('/').get((req, res) => {
    Activity.find()
        .then(activities => res.json(activities))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add activity via activities/add route and save to mongoose
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const activity_description = req.body.activity_description;
    const activity_duration = Number(req.body.activity_duration);
    const date = Date.parse(req.body.date);

    const newActivity = new Activity({
        username,
        activity_description,
        activity_duration,
        date,
    });

    newActivity.save()
        .then(() => res.json('Activity Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//'/:id' is similar to a variable. its an objectID created automatically from MongoDB. Get request for specific activityID and return it as JSON.
router.route('/:id').get((req, res) => {
    Activity.findById(req.params.id)
        .then(activity => res.json(activity))
        .catch(err => res.status(400).json('Error: ' + err));
})

//delete Activity by ID, else throw error
router.route('/:id').delete((req, res) => {
    Activity.findByIdAndDelete(req.params.id)
        .then(() => res.json('Activity deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//find Activity by ID and UPDATE database
router.route('/update/:id').post((req, res) => {
    Activity.findById(req.params.id)
        .then(activity => {
            activity.username = req.body.username;
            activity.activity_description = req.body.activity_description;
            activity.activity_duration = Number(req.body.activity_duration);
            activity.date = Date.parse(req.body.date);

            activity.save()
                .then(() => res.json('Activity Updated!'))
            //disabled below - caused error.
            // .catch(err = res.status(400).json('Error: ' + err));
        })
    //disabled below - caused error.
    // .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;