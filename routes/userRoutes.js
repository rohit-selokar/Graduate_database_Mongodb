const express = require("express");
const router = express.Router();
const user = require("../models/userSchema");

// To get all the data on home page
router.get("/", async (req, res) => {
  try {
    const showData = await user.find();
    res.json(showData);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Route to insert data
router.post("/insertUser", async (req, res) => {
  try {
    const userData = req.body;
    await user.create(userData);
    res.json({ status: "successfully added" });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// display data of Male who are single
router.get("/singleMaleUser", async (req, res) => {
  try {
    const singleMaleUser = await user.find({
      gender: "Male",
      isMarried: false,
    });
    res.json(singleMaleUser);
  } catch (error) {
    console.log("Error on single male user", error);
    res.status(500).json({ error: "Internal server Error" });
  }
});


// Female who score more than 80%
router.get("/femaleScoreMoreThan80", async(req,res)=>{
    try{
        const femaleScoreMoreThan80 = await user.find({
            "gender":"Female",
            "percentage":{$gt:80}
        })
        res.json(femaleScoreMoreThan80);
    }
    catch(error){
        console.log(error);
    }
})


// users who scored more than or equal to 50 percent.
router.get("/allUserMoreThanOrEqual50", async(req,res)=>{
    try{
        const allUserMoreThanOrEqual50 = await user.find({
            percentage:{$gte:50}
        })
        res.json(allUserMoreThanOrEqual50)
    }
    catch(err){
        console.log(err);
    }
})


// update data of all female add scholarship
router.put('/updateFemaleScholarship', async (req, res) => {
  try {
    const updateResult = await user.updateMany(
      { gender: "Female" },
      { $set: { scholarship: true } },
    );

    console.log("Update Result:", updateResult);
    res.json({ status: "Updated successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// delete the data all use who score less than 40%
router.delete("/deleteUserLessThan40", async(req,res)=>{
    try{
        const deleteUserLessThan40 = await user.deleteMany({
            percentage:{$lt:70}
        })
        res.json({status:"deleted successfully", deleteCount: deleteUserLessThan40.deleteCount});
    }
    catch(err){
        console.log(err);
    }
})


module.exports = router;