import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class PiecesService {
    async GetAll() {
        const pieces = await dbContext.Pieces.find().populate('artist', 'name picture')
        return pieces
    }

    async getById(id) {
        const piece = await dbContext.Pieces.findById(id).populate('artist', 'name picture')
        if (!piece) {
            throw new BadRequest('Invalid Piece')
        }
        return piece
    }

    async create(newPiece) {
        const createdPiece = await dbContext.Pieces.create(newPiece)
        await createdPiece.populate('artist', 'name picture')
        return createdPiece
    }

    async edit(updated, artistId) {
        const original = await this.getById(updated.id)
        if (original.artistId.toString() !== artistId) {
            throw new BadRequest('unauthorized')
        }
        original.name = updated.name || original.name
        original.type = updated.type || original.type
        original.tags = updated.tags || original.tags
        original.description = updated.description || original.description
        original.featured = updated.featured || original.featured
        original.featuredOrder = updated.featuredOrder || original.featuredOrder
        await original.save()
        return original
    }

    async remove(id, artistId) {
        const original = await this.getById(id)
        if (original.artistId.toString() !== artistId) {
            throw new BadRequest('unauthorized')
        }
        await dbContext.Pieces.findOneAndRemove({ _id: id, creatorId: artistId },)
    }
}

export const piecesService = new PiecesService()
