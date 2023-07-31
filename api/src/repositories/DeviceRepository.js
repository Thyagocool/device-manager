const categoryModel = require('../database/models/categoryModel')
const deviceModel = require('../database/models/deviceModel')

const Repository = require('./index')

class CategoryRepository extends Repository {
    constructor(){
        super(deviceModel)
    }

    async findDevices (search) {
        try {
            const where = {...search}
            console.log(where)
            const resultSet = await deviceModel.findAll({include: categoryModel, where: where});
            return resultSet;

        } catch (error) {
            return {message: error.message};
        }
    }
}

module.exports = CategoryRepository;