import qs from 'querystring'
import { injectable } from "inversify";
import { ITrackService } from "../ITrackService";
import { Track } from "~/Model/track.model";
import { $axios } from "~/utils/api";
import { TrackInput } from "~/Model/dto/TrackInput.model";
@injectable()
export class TrackService implements ITrackService {
    async getTracks(input: TrackInput): Promise<Track[]> {
        try {
            const query = qs.stringify({ ...input });
            const res: any = await $axios.get<Track[]>(`/track/?${query}`);
            return res.data.data
        } catch (error) {
            return Promise.reject(error)
        }
    }
}