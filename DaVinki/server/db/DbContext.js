import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account';
import { CommissionSchema } from '../models/Commission';
import { FollowerSchema } from '../models/Follower';
import { PiecesSchema } from '../models/Pieces';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);


  Commissions = mongoose.model('Commission', CommissionSchema,);

  Followers = mongoose.model('Follower', FollowerSchema);

  Pieces = mongoose.model('Piece', PiecesSchema);
}

export const dbContext = new DbContext()
