const { json } = require('sequelize');

class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    res.json('sssssssss');
  }
}

module.exports = new UserController();
