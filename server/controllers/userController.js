const ApiError = require('../error/ApiError')

class UserController {
  async check(req, res, next) {
    const {id} = req.query
    if (!id) {
      return next(ApiError.badRequest('Not set ID'))
    }
    res.json(id)
  }

  async registration(req, res) {

  }

  async login(req, res) {

  }
}

module.exports = new UserController()