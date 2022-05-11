const express = require("express");
const router = express.Router();

const BusTravel = require('../../models/BusTravel');

router.post('/', async(req, res) => {
    let body = req.body;
    let busTravel = await BusTravel.create({
        busID: body['busID'],
        startTime: body['startTime'],
        conductorID: body['conductorID']
    });
    return res.status(201).json({
        message: "Created Successfully!",
        data: busTravel
    });
});

router.get('/', async(req, res) => {
    let busTravel = await BusTravel.find({});
    return res.status(200).json(busTravel);
});

router.get('/bustravel/:id', async(req, res) => {
    let id = req.params.id
    let busTravel = await BusTravel.find({_id: id});
    if(busTravel.length == 0)
    {
        return res.status(404).json({
            message: "ID does not exist"
        });
    }
    return res.status(200).json(busTravel[0]);
});

router.delete('/bustravel/:id', async(req, res) => {
    let id = req.params.id
    let busTravel = await BusTravel.deleteMany({_id: id});
    return res.status(201).json({
        message: "Deleted Successfully!"
    });
});

router.get('/conductor/:username', async(req, res) => {
    let username = req.params.username
    let busTravel = await BusTravel.find({conductorID: username});
    return res.status(200).json(busTravel);
});

module.exports = router;