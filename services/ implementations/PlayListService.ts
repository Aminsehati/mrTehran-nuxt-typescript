import { injectable } from 'inversify'
import { IPlayListService } from '../IPlayListService'
import { PlayList } from '~/Model/playlist.model'
import { $axios } from '~/utils/api'
@injectable()
export class PlayListService implements IPlayListService {

     public getPlaylists():string {
        try {
            // const res = await $axios.$get<PlayList[]>('/PlayList');
            // return res
            const test:string = "This is test"
            return test
        } catch (error) {
            return error as any
        }
    }

    public async getPlayList(id: string): Promise<PlayList> {
        try {
            const res = await $axios.$get<PlayList>(
                `/PlayList/${id}`)
            return res
        } catch (error) {
            throw new Error(error as any)
        }
    }
}