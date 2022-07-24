import { PlayList } from '@/Model/playlist.model'
export  interface IPlayListService {
    getPlaylists(): string
    getPlayList(id: string): Promise<PlayList>
}