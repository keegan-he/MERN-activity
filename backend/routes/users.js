//require router:
const router = require('express').Router();
//require model:
let User = require('../models/user.model');

//first route point handles http GET requests for /users URL path
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})

//second routepoint handles http POST requests
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({
        username
    });

    //save user to database:
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

})

module.exports = router;