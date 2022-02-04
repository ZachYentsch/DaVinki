import { Schema } from "mongoose";


export const CommissionSchema = new Schema({
    artistId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    buyerId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    type: { type: String, enum: ['Drawings/Paintings', 'threeDimensional', 'Photography'], required: true },
    description: { type: String, required: true },
    //NOTE do we need required below? Go Ducks
    deposit: { type: Number },
    depositReceived: { type: Boolean, default: false },
    totalPrice: { type: Number },
    status: { type: String, enum: ['pending', 'accepted', 'inProgress', 'completed', 'denied'], required: true, default: 'pending' },


},
    { timestamps: true, toJSON: { virtuals: true } })

CommissionSchema.virtual('artist', {
    localField: 'artistId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})

CommissionSchema.virtual('buyer', {
    localField: 'buyerId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})