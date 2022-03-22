import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const FreeStuffSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    postedBy: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    isUsed: {
        type: Boolean,
        default: true
    },
    city: {
        type: String,
    },
    size: {
        type: Number,
        enum: [1, 2, 3]
    },
    condition: {
        type: Number,
        enum: [1, 2, 3]
    },
    weight: {
        type: Number,
        enum: [1, 2, 3]
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

