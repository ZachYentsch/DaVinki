import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'
class FollowersService {
    async getFollowersByAccountId(accountId) {
        const followers = await dbContext.Followers.find({ accountId: accountId }).populate('account', 'name picture')
        return followers
    }

    async addFollower(newFollower) {
        const addFollower = await dbContext.Followers.create(newFollower)
        await addFollower.populate('buyer', 'name picture')
        return addFollower
    }

    async removeFollower(accountId, followerId) {
        const foundFollower = await dbContext.Followers.findById(accountId)
        if (foundFollower.accountId.toString() !== followerId) {
            throw new BadRequest('unable to delete')
        }
        await foundFollower.remove()
        return foundFollower
    }
}


export const followersService = new FollowersService()