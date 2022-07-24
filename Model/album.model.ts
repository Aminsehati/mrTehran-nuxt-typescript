import { Artist } from './artist.model'
export class Album {
    readonly _id!: string
    readonly name!: string
    readonly imgUrl!: string
    artists!: Artist[] | []
}