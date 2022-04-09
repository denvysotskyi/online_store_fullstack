const uuid = require('uuid')
const patch = require('path')
const { Device } = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
  async getAll(req, res) {

  }

  async getOne(req, res) {

  }

  async create(req, res, next) {
    try {
      const { name, price, rating, typeId, brandId } = req.body
      const { image } = req.files
      let fileName = uuid.v4() + '.jpg'
      image.mv(path.resolve(__dirname, '..', 'static', fileName))

      const device = await Device.create({ name, price, rating, typeId, brandId, image: fileName })

      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest('Error: ', e.message))
    }
  }
}

module.exports = new DeviceController()