import qs from 'querystring'
import { injectable } from 'inversify'
import { IPlayListService } from '../IPlayListService'
import { PlayList } from '~/Model/playlist.model'
import { PlayListInput } from '~/Model/dto/playlistInput.model'
import { $axios } from '~/utils/api'
@injectable()
export class PlayListService implements IPlayListService {

    async getPlaylists(data: PlayListInput): Promise<PlayList[]> {
        try {
            const query = qs.stringify({
                ...data
            });
            const res: any = await $axios.$get<PlayList[]>(`/PlayList/?${query}`,);
            return res.data
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async getPlayList(id: string): Promise<PlayList> {
        try {
            const res = await $axios.$get<PlayList>(
                `/PlayList/${id}`)
            return res
        } catch (error) {
            return Promise.reject(error)
        }
    }
}