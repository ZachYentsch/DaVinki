import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class CommissionsService {
    async getByAccount(artistId, buyerId) {
        const commissions = await dbContext.Commissions.find({ id: artistId, accountId: buyerId }).populate('account', 'name')
        //Would the other Line go here
        return commissions
    }

    async getById(id) {
        const commissions = await dbContext.Commissions.find({ _id: id }).populate('account', 'name picture')
        return commissions
    }

    async createCommission(newCommission) {
        const createdCommission = await dbContext.Commissions.create(newCommission)
        await createdCommission.populate('artist', 'name picture')
        await createdCommission.populate('buyer', 'name picture')
        return createdCommission
    }

    async editCommission(updated,) {
        const original = await dbContext.Commissions.findById(updated.id)
        if (original.status.toString() !== 'denied') {
            throw new BadRequest('Cannot Edit Denied Request')
        }
        original.type = updated.type || original.type
        original.description = updated.description || original.description
        original.deposit = updated.deposit || original.deposit
        original.depositReceived = updated.depositReceived || original.depositReceived
        original.totalPrice = updated.totalPrice || original.totalPrice
        original.status = updated.status || original.status
        await original.save()
        return original
    }

    async removeCommission(id) {
        const foundCommission = await dbContext.Commissions.findById(id)
        await foundCommission.remove()
        await foundCommission
    }

}

export const commissionsService = new CommissionsService()