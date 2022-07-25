import { Pagination } from "../pagination.model";

export class ArtistInput extends Pagination{
    readonly createdAt?:number
    readonly Followers?:number
}