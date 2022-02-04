import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    biography: { type: String },
    location: { type: String, required: true },
    facebook: { type: String },
    instagram: { type: String },
    quote: { type: String },
    acceptingCommissions: { type: Boolean, default: false },
    isArtist: { type: Boolean },
    coverImg: { type: String }
    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

