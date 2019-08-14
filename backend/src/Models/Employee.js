const { Schema, model } = require("mongoose");

const EmployeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    eid: {
      type: String,
      required: true
    },
    workload: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Employee", EmployeeSchema);
