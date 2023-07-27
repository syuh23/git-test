const DealService = require('../service/deal.service');

async function postDeal(req, res, next) {
    const postDeal_req = req.body;
    const postDeal_data = await DealService.postDeal(postDeal_req);
    return res.json(postDeal_data)
}

module.exports = {
    postDeal
}