import { injectable } from 'inversify'
import { IPlayListService } from '../IPlayListService'
import { PlayList } from '~/Model/playlist.model'
import { $axios } from '~/utils/api'
import Logger from '~/utils/Logger'
@injectable()
export class PlayListService implements IPlayListService {
    constructor() {
        Logger.info(`[CONSTRUCTOR] ${this.constructor.name}`)
    }

    async getPlaylists(): Promise<PlayList[]> {
        try {
            const res = await $axios.$get<PlayList[]>('/PlayList');
            return res
        } catch (error) {
            throw new Error(error as any)
        }
    }

    async getPlayList(id: string): Promise<PlayList> {
        try {
            const res = await $axios.$get<PlayList>(
                `/PlayList/${id}`)
            return res
        } catch (error) {
            throw new Error(error as any)
        }
    }
}