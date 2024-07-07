const express = require("express");
const mongoose = require("mongoose");
const Admin = require("../models/adminModel");
const Student = require("../models/studentModel");
const router = express.Router();

router.get("/admin", async (req, res) => {
  const admins = await Admin.find({});

  res.status(200).json(admins);
});

router.post("/admin", async (req, res) => {
  const { name, email, password, logout } = req.body;
  try {
    const admin = await Admin.create({ name, email, password, logout });
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/student", async (req, res) => {
  const students = await Student.find({});

  res.status(200).json(students);
});

router.post("/student", async (req, res) => {
  const {
    seatNo,
    name,
    email,
    password,
    department,
    checkin,
    checkout,
    totalAttendence,
  } = req.body;
  try {
    const student = await Student.create({
      seatNo,
      name,
      email,
      password,
      department,
      checkin,
      checkout,
      totalAttendence,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/student/checkinout/update/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such student" });
  }

  const student = await Student.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!student) {
    return res.status(400).json({ error: "no such student" });
  }

  res.status(200).json(student);
});

module.exports = router;
