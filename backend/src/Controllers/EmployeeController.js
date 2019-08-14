module.exports = {
  index(req, res) {
    return res.status(403).json({ error: "Forbidden!" });
  },

  store(req, res) {
    const { employeeName, employeeId, employeeWorkload } = req.body;
    console.log("Nova conexão", employeeName, employeeId, employeeWorkload);

    return res.json({
      success: "True",
      message: `Funcionário ${employeeName} foi adicionado`
    });
  }
};
