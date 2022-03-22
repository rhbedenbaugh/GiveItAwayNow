import mongoose from 'mongoose';
import { FreeStuffSchema } from '../models/freeStuffModel.js';

const FreeStuff = new mongoose.model('FreeStuff', FreeStuffSchema);

export const addNewFreeStuff = (req,res) => {
    let newFreeStuff = new FreeStuff(req.body);

    newFreeStuff.save((err, FreeStuff) => {
        if (err) {
            res.send(err);
        }
        res.json(FreeStuff);
    });
};

export const getFreeStuff = (req,res) => {
    FreeStuff.find({},(err, FreeStuff) => {
        if (err) {
            res.send(err);
        }
        res.json(FreeStuff);
    });
};

export const getFreeStuffWithID = (req,res) => {
    FreeStuff.findById(req.params.FreeStuffId,(err, FreeStuff) => {
        if (err) {
            res.send(err);
        }
        res.json(FreeStuff);
    });
};

export const UpdateFreeStuff = (req,res) => {
    FreeStuff.findOneAndUpdate({ _id: req.params.FreeStuffId}, req.body, {new: true}, (err, FreeStuff) => {
        if (err) {
            res.send(err);
        }
        res.json(FreeStuff);
    });
};

export const deleteFreeStuff = (req,res) => {
    FreeStuff.deleteOne({ _id: req.params.FreeStuffId}, (err, FreeStuff) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted stuff'});
    });
};

