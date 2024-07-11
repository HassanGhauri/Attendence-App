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

router.get("/student/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such student" });
  }

  const student = await Student.findById(
    { _id: id })

  res.status(200).json(student);
});

router.post("/student", async (req, res) => {
  const {
    seatno,
    name,
    email,
    password,
    department,
    checkin,
    checkout,
    totalattendence,
  } = req.body;
  try {
    const student = await Student.create({
      seatno,
      name,
      email,
      password,
      department,
      checkin,
      checkout,
      totalattendence,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/student/update/:id", async (req, res) => {
  const {id}= req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such student" });
  }

  await Student.findOneAndUpdate({_id:id},{...req.body});

  const student = await Student.findById(
    { _id: id })

  if (!student) {
    return res.status(400).json({ error: "no such student" });
  }

  res.status(200).json(student);
});

router.delete("/student/delete/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such student" });
  }

  const student = await Student.findOneAndDelete({ _id: id });

  if (!student) {
    return res.status(400).json({ error: "no such student" });
  }

  res.status(200).json(student);
});


router.post("/student/login", async (req, res) => {
  const { email, password} = req.body;
  Student.findOne({email:email})
  .then((user)=>{
    if(user){
      if(user.password === password){
        res.json({mssg:"User Success",id:user._id});
      } else {
        res.json("Incorrect Password")
      }
    } else{
      Admin.findOne({email:email})
      .then((admin)=>{
        if(admin){
          if(admin.password === password){
            res.json({mssg:"Admin Success",id:admin._id});
          } else {
            res.json("Incorrect Password")
          }
        }
      })
    }
  })
});
module.exports = router;
