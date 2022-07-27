import { Artist } from '@/Model/artist.model'
export class ActivePlayer {
    audio!: any
    idPlayer!: string
    audioDuration!: string | number
    audioCurrentTime!: string | number
    imgUrl!: string | ''
    playing!: boolean | false
    trackName!: string | ''
    hasAlbum!: boolean | false
    albumID!: string | ''
    artists!: Artist[]
}