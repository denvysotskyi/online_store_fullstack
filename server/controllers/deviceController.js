const uuid = require('uuid')
const path = require('path')
const { Device } = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
  async getAll(req, res) {
    let { typeId, brandId, limit, page } = req.query
    page = page || 1
    limit = limit || 10
    let offset = page * limit - limit
    let devices
    if (!typeId && !brandId) {
      devices = await Device.findAndCountAll({ limit, offset })
    }
    if (!typeId && brandId) {
      devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
    }
    if (typeId && !brandId) {
      devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
    }
    if (typeId && brandId) {
      devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset })
    }
    return res.json(devices)
  }

  async getOne(req, res) {
    const device = await Device.findById(id)

  }

  async create(req, res, next) {
    try {
      const { name, price, typeId, brandId, info } = req.body
      const { image } = req.files
      let fileName = uuid.v4() + '.jpg'
      image.mv(path.resolve(__dirname, '..', 'static', fileName))

      const device = await Device.create({
        name,
        price,
        typeId,
        brandId,
        image: fileName
      })

      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new DeviceController()