import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const FollowerSchema = new Schema({
    //NOTE the account being followed is the accountId
    accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    followerId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
    { timestamps: true, toJSON: { virtuals: true } })

FollowerSchema.virtual('account', {
    localField: 'accountId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account',
})

FollowerSchema.virtual('follower', {
    localField: 'followerId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'

})