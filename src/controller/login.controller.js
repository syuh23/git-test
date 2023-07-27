const LoginService = require('../service/login.service')

async function getLogin(req, res, next){
    const access_token = req.query.access_token;
    console.log(req.query)
    console.log(access_token)
    const getlogin_data = await LoginService.getLogin(access_token);
    return res.status(getlogin_data.Status).json(getlogin_data)
}

module.exports = {
    getLogin
}