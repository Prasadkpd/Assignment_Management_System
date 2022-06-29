const express =  require('express');
const Assignment = require("../model/Assignment");

const assignmentRoutes = express.Router();

assignmentRoutes.route('/add').post(function (req,res) {
    let assignment = new Assignment(req.body);
    assignment.save()
        .then(assignment=> {
            res.stat(200).json({'assignment':'assignment added successfully'});
        })
        .catch(err=> {
            res.status(400).send("Unable to save")
        })
})

assignmentRoutes.route('/').get(function (req, res) {
    Assignment.find(function (err, assignment) {
        if (err){
            console.log(err);
        } else {
            res.json(assignment);
        }
    })
});

assignmentRoutes.route('/delete/:id').get(function (req, res) {
    Assignment.findByIdAndRemove({_id: req.params.id}, function (err, assignment) {
        if (err) res.json(err);
        else res.json("Successfully removed");
    });
});

module.exports = assignmentRoutes;