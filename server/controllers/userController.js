class UserController {
  async check(req, res) {
    const {id} = req.query
    res.json(id)
  }
  async registration(req, res) {

  }

  async login(req, res) {

  }
}

module.exports = new UserController()