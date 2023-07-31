const deviceModel = require('../database/models/deviceModel')

const Repository = require('./index')

class DeviceRepository extends Repository {
    constructor(){
        super(deviceModel)
    }
}

module.exports = DeviceRepository;