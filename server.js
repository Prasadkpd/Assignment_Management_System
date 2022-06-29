const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const users = require('./routes/Users.js');
const assignmentRoutes = require('./routes/Assignment');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}))

app.use('/assignment', assignmentRoutes);

app.use(fileUpload());
app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({msg: "No file upload"});
    }
    const file = req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        }
        res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
    });
});

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const mongoURI = 'mongodb://localhost:27017/Students';
mongoose.connect(mongoURI)
    .then(() => console.log('Database connected'))
    .catch(err => {
        console.log(err)
    });

app.use("/users", users);

app.listen(port, () => {
    console.log("Server is listening on port " + port);
})
