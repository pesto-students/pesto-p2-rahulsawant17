const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();
const { userModel, holdingModel } = require("./model");
const Grid = require("gridfs-stream");
const fs = require("fs");
const database = require("../index");
Grid.mongo = mongoose.mongo;
//Login request
route.post("/login", async (req, res) => {
  const { username, password } = req.body;

  userModel.findOne({ username: username, password: password }, (err, user) => {
    if (err) {
      res.status(500).send({ error: err });
    }
    if (!user) {
      res.status(404).send({ error: "user not found" });
    }

    res.status(200).send({ message: `User sucessfully logged in` });
  });
});

//Register
route.post("/register", async (req, res) => {
  const data = new userModel({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const datasave = await data.save();
    res
      .status(200)
      .json({ message: "Registration Successful", user: req.body.username });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Add assests
route.post("/holdings", async (req, res) => {
  const data = new holdingModel({
    asset_type: req.body.asset_type,
    asset_id: req.body.asset_id,
    asset_value: req.body.asset_value,
    intrest_rate: req.body.intrest_rate ? req.body.intrest_rate : 0,
    invested_date: req.body.invested_date,
    invested_period_years: req.body.invested_period_years
      ? req.body.invested_period_years
      : 0,
    maturity_date: req.body.maturity_date ? req.body.maturity_date : null,
    status: req.body.status ? req.body.status : "ACTIVE",
    expense_type: req.body.expense_type,
  });
  try {
    const datasave = await data.save();
    res.status(200).json({ message: "Assests added sucessfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//fetch all assets
route.get("/holdings", async (req, res) => {
  try {
    const allData = await holdingModel.find();
    res.json(allData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//get income ,expense and saving for current year
// route.get("/holdings/stats", async (req, res) => {
//   var today = new Date();
//   if (today.getMonth() + 1 <= 3) {
//     start = new Date(today.getFullYear() - 1, 03, 01);
//     end = new Date(today.getFullYear(), 02, 31);
//   } else {
//     start = new Date(today.getFullYear(), 03, 01);
//     end = new Date(today.getFullYear() + 1, 02, 31);
//   }
//   try {
//     const allData = await holdingModel.find({
//       $and: [
//         { invested_date: { $gt: start } },
//         { invested_date: { $lt: end } },
//       ],
//     }).aggregate( [ { $group : { _id : "$expense_type" } } ] )
//     ;
//     res.json(allData);
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// });

//get income ,expense and saving
route.get("/holdings/stats", async (req, res) => {
  try {
    const allData = await holdingModel.aggregate([
      { $match: { expense_type: "DEBIT" } },
      { $group: { _id: "$expense_type", total: { $sum: "$asset_value" } } },
    ]);
    const debit = allData[0].total ? allData[0].total : 0;

    const allData1 = await holdingModel.aggregate([
      { $match: { asset_type: "FIXEDINCOME" } },
      { $group: { _id: "$asset_type", total: { $sum: "$asset_value" } } },
    ]);
    const income = allData1[0].total ? allData1[0].total : 0;

    const allData2 = await holdingModel.aggregate([
      { $match: { expense_type: "CREDIT" } },
      { $group: { _id: "$expense_type", total: { $sum: "$asset_value" } } },
    ]);
    const credit = allData2[0].total ? allData2[0].total : 0;

    res.send({ Income: income, Expenses: debit, Savings: income - debit });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//get holding by asset id
route.get("/holdings/:id", async (req, res) => {
  const data = await holdingModel.find({ asset_id: req.params.id });
  try {
    res.json(data);
  } catch (err) {
    res.send(400).json({ message: err.message });
  }
});

//update holding by asset id
route.put("/holdings/:id", async (req, res) => {
  const asset_id = req.params.id;
  const update_data = req.body;

  try {
    const data = await holdingModel.findOneAndUpdate(
      { asset_id: asset_id },
      update_data,
      {
        new: true,
        upsert: true,
      }
    );
    res.send({ message: `Asset ${asset_id} sucessfully updated`, data: data });
  } catch (err) {
    res.send(400).json({ message: err.message });
  }
});

//Activate holding by asset id
route.put("/holdings/activate/:id", async (req, res) => {
  const asset_id = req.params.id;

  holdingModel.findOne({ asset_id: asset_id }, async (err, asset) => {
    if (err) {
      res.status(500).send({ error: err });
    }
    if (asset.status == "ACTIVATE") {
      res.send({ message: `Asset ${asset_id} Already Activated` });
    }
    try {
      const data = await holdingModel.findOneAndUpdate(
        { asset_id: asset_id },
        { status: "ACTIVATE" },
        {
          new: true,
          upsert: true,
        }
      );
      res.send({ message: `Asset ${asset_id} sucessfully Activated` });
    } catch (err) {
      res.send(400).json({ message: err.message });
    }
  });
});

//Inctivate holding by asset id
route.put("/holdings/inactivate/:id", async (req, res) => {
  const asset_id = req.params.id;

  holdingModel.findOne({ asset_id: asset_id }, async (err, asset) => {
    if (err) {
      res.status(500).send({ error: err });
    }
    if (asset.status == "INACTIVATE") {
      res.send({ message: `Asset ${asset_id} Already Inctivated` });
    }
    try {
      const data = await holdingModel.findOneAndUpdate(
        { asset_id: asset_id },
        { status: "INACTIVATE" },
        {
          new: true,
          upsert: true,
        }
      );
      res.send({ message: `Asset ${asset_id} sucessfully Inctivated` });
    } catch (err) {
      res.sendStatus(400);
    }
  });
});

//add documnet by asset id
// route.post("/holdings/doc/:id", async (req, res) => {

//     try {
//         const asset_id = req.params.id;
//         const {path} = req.body;
//         const gfs=Grid(database.db)
//         const writestream=gfs.createWriteStream({
//             document:`documnet${asset_id}.pdf`
//         })
//         fs.createReadStream(path).pipe(writestream)
//         writestream.on('close',(file)=>{
//             console.log(`${file.filename} written to DB`)
//         })
//     //   const data = await holdingModel.findOneAndUpdate(
//     //     { asset_id: asset_id },
//     //     update_data,
//     //     {
//     //       new: true,
//     //       upsert: true,
//     //     }
//     //   );
//       res.send({ message: `Asset ${asset_id} sucessfully updated`, data: data });
//     } catch (err) {
//       res.send(400).json({ message: err.message });
//     }
//   });

module.exports = route;
