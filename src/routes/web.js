const express = require('express');
const { getHomepage, getHoiCong, postCreateUser, getCreatePage, getEditPage } = require('../controllers/homeController');
const router = express.Router();

router.get('/anh_cong', getHoiCong);
router.get('/', getHomepage);
router.get('/create', getCreatePage)
router.get('/edit/:id', getEditPage)

router.post('/create-user', postCreateUser);

module.exports = router;