import { injectable } from "inversify";
import { IAlbumService } from "../IAlbumService";
import { Album } from "~/Model/album.model";
import { $axios } from "~/utils/api";
@injectable()
export class AlbumService implements IAlbumService {
    async getAlbums():Promise<Album[]>{
        try {
            const res:any = await $axios.get<Album[]>("/Album");
            return res.data.data
        } catch (error) {
            return Promise.reject(error)
        }
    }
}