const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create({
        email: req.body.email,
        password: req.body.password
      })
      res.send(user.toJSON())
    } catch (error) {
      res.status(400).send({
        error: 'Email id already registered'
      })
    }
  }
}
