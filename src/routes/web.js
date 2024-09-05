const express = require('express');
const { getHomepage, getHoiCong } = require('../controllers/homeController');
const router = express.Router();

router.get('/anh_cong', getHoiCong);
router.get('/', getHomepage);

module.exports = router;