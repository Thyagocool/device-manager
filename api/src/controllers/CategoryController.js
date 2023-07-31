const CategoryRepository = require("../repositories/CategoryRepository");
const categoryRepository = new CategoryRepository();

class CategoryController {
  static findAll = async (req, res) => {
    try {
      const search = req.query;
      const result = await categoryRepository.findAll(search);
        console.log(result)
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  static save = async (req, res) => {
    const category = req.body;
    try {
      await categoryRepository.save(category);
      res.status(201).json({ message: "Category was created" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  static delete = async (req, res) => {
    try {
      const { id } = req.query;

      if (id) {
        await categoryRepository.delete(id);
        res.status(201).json({ message: `Category ${id} was deleted` });
      }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

module.exports = CategoryController;
