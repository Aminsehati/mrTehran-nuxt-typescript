import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'
import { PlayListService } from '../ implementations/PlayListService'
import { IPlayListService } from '../IPlayListService'
import { IArtistService } from '../IArtistService'
import { ArtistService } from '../ implementations/ArtistService'
import { AlbumService } from '../ implementations/AlbumService'
import { IAlbumService } from '../IAlbumService'
import { ITrackService } from '../ITrackService'
import { TrackService } from '../ implementations/TeackService'
import { SYMBOLS } from './SYMBOLS'
export const container = new Container();

// ! logics
container.bind<IPlayListService>(SYMBOLS.IPlayListService).to(PlayListService).inRequestScope()
container.bind<IArtistService>(SYMBOLS.IArtistService).to(ArtistService).inRequestScope()
container.bind<IAlbumService>(SYMBOLS.IAlbumService).to(AlbumService).inRequestScope()
container.bind<ITrackService>(SYMBOLS.ITrackervice).to(TrackService).inRequestScope()


export const { lazyInject } = getDecorators(container)