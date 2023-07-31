const DeviceRepository = require("../repositories/DeviceRepository");
const deviceRepository = new DeviceRepository();

class DeviceController {
  static findDevices = async (req, res) => {
    try {
      const search = req.query;
      const result = await deviceRepository.findDevices(search);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  static save = async (req, res) => {
    const Device = req.body;
    try {
      await deviceRepository.save(Device);
      res.status(201).json({ message: "Device was created" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  static delete = async (req, res) => {
    try {
      const { id } = req.query;

      if (id) {
        await deviceRepository.delete(id);
        res.status(201).json({ message: `Device ${id} was deleted` });
      }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

module.exports = DeviceController;
