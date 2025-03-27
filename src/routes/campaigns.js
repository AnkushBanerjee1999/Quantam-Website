const express = require('express');
const router = express.Router();
const { auth, roleCheck } = require('../middleware/auth');
const { createCampaign, getCampaigns, invest } = require('../controllers/campaignController');
const { campaignValidation, investValidation } = require('../utils/validators');

router.post('/', [auth, roleCheck(['startup']), ...campaignValidation], createCampaign);
router.get('/', getCampaigns);
router.post('/:id/invest', [auth, roleCheck(['investor']), ...investValidation], invest);

module.exports = router;