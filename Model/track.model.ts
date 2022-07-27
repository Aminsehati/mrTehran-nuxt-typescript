import { Artist } from "./artist.model";
import { PlayList } from "./playlist.model";
export class Track {
    readonly _id!: string;
    readonly imgUrl!: string;
    readonly audioUrl!: string;
    readonly trackName!: string;
    readonly view!: number;
    readonly like!: number;
    artists!: Artist[]
    playlists!: PlayList[]
}