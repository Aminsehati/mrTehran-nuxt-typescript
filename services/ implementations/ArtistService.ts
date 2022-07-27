import qs from 'querystring'
import { injectable } from "inversify";
import { IArtistService } from "../IArtistService";
import { Artist } from "~/Model/artist.model";
import { ArtistInput } from "~/Model/dto/ArtistInput.model";
import { $axios } from "~/utils/api";
@injectable()
export class ArtistService implements IArtistService {
    async getArtist(id: string): Promise<Artist> {
        try {
            const res: any = await $axios.get<Artist[]>(`/Artist/${id}`);
            return res.data.data.item
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async getArtists(input: ArtistInput): Promise<Artist[]> {
        try {
            const query = qs.stringify({
                ...input
            });
            const res: any = await $axios.get<Artist[]>(`/Artist/?${query}`);
            return res.data.data
        } catch (error) {
            return Promise.reject(error)
        }
    }

}