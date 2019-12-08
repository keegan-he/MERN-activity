//require router:
const router = require('express').Router();
//require model:
let Url = require('../models/urls.model');

//first route point handles http GET requests for /urls path
router.route('/').get((req, res) => {
    Url.find()
        .then(urls => res.json(urls))
        .catch(err => res.status(400).json('Error: ' + err));
})

//second routepoint handles http POST requests
router.route('/add').post((req, res) => {
    const url = req.body.url;
    const newUrl = new Url({
        url
    });

    //save url to mongoDB:
    newUrl.save()
        .then(() => res.json('URL added to database!'))
        .catch(err => res.status(400).json('Error: ' + err));

})

module.exports = router;