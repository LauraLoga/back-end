var express = require('express'),
    controller = require('./controller');
    router = express.Router();

router.route('/crops')
    .get(controller.getCrops);
router.route('/crop/:name')
    .get(controller.getCrop);
router.route('/crop')
    .post(controller.postCrop);
module.exports = router;
