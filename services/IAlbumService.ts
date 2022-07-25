import { Album } from "~/Model/album.model";

export interface IAlbumService {
    getAlbums(): Promise<Album[]>
}