import mongoose from 'mongoose'

const Schema = mongoose.Schema
export const PiecesSchema = new Schema({
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    name: { type: String, required: true },
    type: { type: String, enum: ['Drawings/Paintings', 'threeDimensional', 'Photography'], required: true },
    tags: [{ type: String }],
    createdDate: { type: String, required: true },
    description: { type: String, required: true },
    commissionId: { type: Schema.Types.ObjectId, ref: 'Commission' },
    featured: { type: Boolean },
    featuredOrder: { type: Number, min: 1, max: 6 }

},
    { timestamps: true, toJSON: { virtuals: true } })

PiecesSchema.virtual('artist', {
    localField: 'artistId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})

PiecesSchema.virtual('commission', {
    localField: 'commissionId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})
