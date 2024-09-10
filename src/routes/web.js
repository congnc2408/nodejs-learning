const express = require('express');
const { getHomepage, getHoiCong, postCreateUser, getCreatePage } = require('../controllers/homeController');
const router = express.Router();

router.get('/anh_cong', getHoiCong);
router.get('/', getHomepage);
router.get('/create', getCreatePage)

router.post('/create-user', postCreateUser);

module.exports = router;