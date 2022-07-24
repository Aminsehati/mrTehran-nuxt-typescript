import { PlayList } from '@/Model/playlist.model'
export  interface IPlayListService {
    getPlaylists(): Promise<PlayList[]>
    getPlayList(id: string): Promise<PlayList>
}