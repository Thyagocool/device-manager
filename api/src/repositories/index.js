class Repository {
    constructor(modelName){
        this.__modelName = modelName;
    };
    
    async findAll(search) {
        try {
            const where = {...search};
            const result = await this.__modelName.findAll({where});
            if(result.length>0){
                return result;
            }else{
                return {message:'Not Found'};
            }
        } catch (error) {
            console.log({message: error.message})
        }
    };
    
    async save(data) {
        try {
            const result = await this.__modelName.create(data);
            if(result){
                return result;
            }
        } catch (error) {
            console.log({message: error.message})
        }
    };
    
    async delete(id) {
        try {
            const result = await this.__modelName.destroy({where: { id:id }});
            if(result){
                return {message: "Data was deleted"};
            }
        } catch (error) {
            console.log({message: error.message})
        }
    };
}

module.exports = Repository;