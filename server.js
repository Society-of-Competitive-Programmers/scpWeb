'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const helper = require('./helper');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;
app.set('trust proxy', true);
app.use(express.static(__dirname + '/scpWeb-ui/dist/scpWeb-ui'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname)));

app.get("/spotlightInfo", getSpotlightInfo);
app.get("/upcomingHackathons", getUpcomingHackathons);
app.get("/meetings", getMeetingInfo);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.redirect('/');
});

const server = http.createServer(app);

server.listen(port, () => console.log('Running...'));


// GET Requests
function getSpotlightInfo(req, res) {
    let spotlightInfo = helper.RetrieveSpotlightJSON();
    res.send(spotlightInfo);
}

function getUpcomingHackathons(req, res) {
    let upcomingHackathons = helper.RetrieveHackathonInfo();
    res.send(upcomingHackathons);
}

function getMeetingInfo(req, res) {
    let meetingType = req.query.meetingType;
    let meetings = helper.RetrieveInfoFromDrive(meetingType);
    res.send(meetings);
}