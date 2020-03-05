let express = require("express");
const path = require("path");
const Workout = require("../models/workout");

module.exports = function(app){
    app.get("/",function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/exercise",function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    app.get("/stats",function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
    app.post("/api/workouts", (req, res) => {
        console.log("I'm a placeholder!")
    });
    
    app.put("/api/workouts/:id",({ body }, res) =>{
        Workout.create({ exercises: body})
        .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
    app.get("/api/workouts",(req,res) =>{
        Workout.find({})
        .then(dbWorkout =>{
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })
}