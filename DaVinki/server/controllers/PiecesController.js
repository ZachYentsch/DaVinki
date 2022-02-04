import { Auth0Provider } from "@bcwdev/auth0provider"
import BaseController from "../utils/BaseController"
import { piecesService } from "../services/PiecesService"


export class PiecesController extends BaseController {
    constructor() {
        super("api/pieces")
        this.router
            .get('', this.getAll)
            .get('/:id', this.getPieceById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPiece)
            .put('/:id', this.editPiece)
            .delete('/:id', this.removePiece)
    }

    async getAll(req, res, next) {
        try {
            const pieces = await piecesService.getAll()
            return res.send(pieces)
        } catch (error) {
            next(error)
        }
    }
    async getPieceById(req, res, next) {
        try {
            const piecesId = await piecesService.getById(req.params.id)
            return res.send(piecesId)
        } catch (error) {
            next(error)
        }
    }

    async createPiece(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            const createdPiece = await piecesService.create(req.body)
            return res.send(createdPiece)
        } catch (error) {
            next(error)
        }
    }

    async editPiece(req, res, next) {
        try {
            req.body.id = req.params.id
            const editedPiece = await piecesService.edit(req.body, req.userInfo.id)
            return res.send(editedPiece)
        } catch (error) {
            next(error)
        }
    }

    async removePiece(req, res, next) {
        try {
            const updated = await piecesService.remove(req.params.id, req.userInfo.id)
            return res.send(updated)
        } catch (error) {
            next(error)
        }
    }

}