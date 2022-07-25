import { Artist } from '@/Model/artist.model'
export class Album {
    _id!: string
    name!: string
    imgUrl!: string
    artists!: Artist[]
}