import { Artist } from '@/Model/artist.model'
import { ArtistInput } from '@/Model/dto/ArtistInput.model'
export interface IArtistService {
    getArtists(input: ArtistInput): Promise<Artist[]>
    getArtist(id: string): Promise<Artist>
}