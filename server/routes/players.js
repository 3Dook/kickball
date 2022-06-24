const express = require('express')
const router = express.Router();
let Player = require('../models/player.model');


router.route('/')
    .get((req,res)=>{
        try{
            Player.find()
                .then(players => res.status(200).json({players}))
        } catch(e){
            res.status(400).json({Error: e})
        }
    })
    .post(async (req, res)=>{
        try{
            //Error Check Here
            //
            const { name, team } = req.body
            const block = new Player({name, team})
            await block.save()
            .then((data) => res.json(data))
            .catch(e => res.status(400).json({Error: "Unable to save" + e}))
        }  catch(e){
            res.status(400).json({Error: "Unable to Post " + e})
        }
    })

router.route('/:id')
    .get((req, res) =>{
        Player.findById(req.params.id)
        .then(player => res.status(201).json(player))
        .catch(e => res.status(402).json({Error: "Unable to find -"+ e}))
    })
    .put((req,res)=>{
        Player.findById(req.params.id)
        .then(block =>{
            //Error Check here
            //
            block.record = req.body.record;
            block.save()
            .then(data => res.status(202).json(data))
            .catch(e => res.status(400).json({Error: "Unable to update" + e}))
        })
        .catch(e => res.status(400).json({Error: "Unable to update" + e}))
    })
    .patch((req,res)=>{
        Player.findById(req.params.id)
        .then(block =>{
            //Error Check here
            //
            block.team = req.body.team;

            block.save()
            .then(data => res.status(202).json(data))
            .catch(e => res.status(400).json({Error: "Unable to update" + e}))
        })
        .catch(e => res.status(400).json({Error: "Unable to update" + e}))
    })
    .delete((req,res)=>{
        Player.findByIdAndDelete(req.params.id)
        .then((data)=>{res.status(202).json({Message: "PLAYER DELETED - "+ data})})
        .catch(e => res.status(400).json({Error: "Unable to DELETE" + e}))
    })
module.exports = router;