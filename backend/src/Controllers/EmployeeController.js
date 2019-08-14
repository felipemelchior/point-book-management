const Employee = require("../Models/Employee");

module.exports = {
  async index(req, res) {
    const { employeeName } = req.body;

    const employeeExists = await Employee.find({
      name: {
        $regex: employeeName,
        $options: "i"
      }
    });

    if (employeeExists.length > 0) {
      return res.json(employeeExists);
    } else {
      return res.json({
        error: "Não existe empregados com o nome solicitado!"
      });
    }
  },

  async store(req, res) {
    const { employeeName, employeeId, employeeWorkload } = req.body;
    const employeeExists = await Employee.findOne({ name: employeeName });

    if (employeeExists) {
      return res.json(employeeExists);
    }

    const employee = await Employee.create({
      name: employeeName,
      eid: employeeId,
      workload: employeeWorkload
    });

    return res.json(employee);
  },

  async delete(req, res) {
    const { _id } = req.params;

    const employee = await Employee.deleteOne({ _id });

    return res.json(employee);
  },

  async update(req, res) {
    const { _id } = req.params;
    const { employeeName, employeeId, employeeWorkload } = req.body;

    const employee = await Employee.findOneAndUpdate(
      {
        _id
      },
      {
        _id,
        name: employeeName,
        eid: employeeId,
        workload: employeeWorkload
      },
      {
        upsert: true
      },
      function(err, doc) {
        if (err) return res.json({ error: err });
      }
    );

    return res.json(employee);
  }
};
