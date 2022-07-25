import { injectable } from "inversify";
import { Artist } from "~/Model/artist.model";
import { ArtistInput } from "~/Model/dto/ArtistInput.model";
import { $axios } from "~/utils/api";
import { IArtistService } from "../IArtistService";
import qs from 'querystring'
@injectable()
export class ArtistService implements IArtistService {
    async getArtists(input:ArtistInput): Promise<Artist[]> {
        try {
            const query = qs.stringify({
                ...input
            });
            const res:any = await $axios.get<Artist[]>(`/Artist/?${query}`);
            return res.data.data.items || []
        } catch (error) {
            return Promise.reject(error)
        }
    }

}