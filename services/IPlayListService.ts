import { PlayList } from '@/Model/playlist.model'
import { PlayListInput } from '@/Model/dto/playlistInput.model'
export interface IPlayListService {
    getPlaylists(input: PlayListInput): Promise<PlayList[]>
    getPlayList(id: string): Promise<PlayList>
}