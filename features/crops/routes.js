var express = require('express'),
    controller = require('./controller');
    router = express.Router();

router.route('/crops')
    .get(controller.getCrops);

module.exports = router;
