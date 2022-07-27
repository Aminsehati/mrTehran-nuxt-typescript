import { TrackInput } from "~/Model/dto/TrackInput.model";
import { Track } from "~/Model/track.model";

export interface ITrackService {
    getTracks(input: TrackInput): Promise<Track[]>
}