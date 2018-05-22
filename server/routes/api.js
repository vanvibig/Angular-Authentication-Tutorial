const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb://127.0.0.1:27017/eventsdb";

mongoose.connect(db, err => {
    if(err)
        console.log('Error' + err);
    else
        console.log('Connected to mongodb');
});

router.get('/', (req, res) => {
    res.send('From API router');
});

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if(error)
            console.log(error);
        else
            res.status(200).send(registeredUser);
    });
});

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (error, user)=>{
        if(error)
            console.log(error);
        else{
            if(!user)
                res.status(404).send('Invalid email');
            else if (user.password !== userData.password)
                res.status(401).send('Invalid password');
            else res.status(200).send(user);
        }
    });
});

router.get('/events', (req, res) => {
    let events = [
        {
            "_id": 1,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        },{
            "_id": 2,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        },{
            "_id": 3,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        },{
            "_id": 4,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        },{
            "_id": 5,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        },{
            "_id": 6,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        }
    ];
    res.json(events);
});

router.get('/special', (req, res) => {
    let events = [
        {
            "_id": 1,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        },{
            "_id": 2,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        },{
            "_id": 3,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        },{
            "_id": 4,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        },{
            "_id": 5,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        },{
            "_id": 6,
            "name": "Auto Expo",
            "description": "Lorem ipsum",
            "date": "2018-05-22"
        }
    ];
    res.json(events);
});


module.exports = router;