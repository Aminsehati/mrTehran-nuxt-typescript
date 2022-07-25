import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'
import { PlayListService } from '../ implementations/PlayListService'
import { IPlayListService } from '../IPlayListService'
import { SYMBOLS } from './SYMBOLS'
import { IArtistService } from '../IArtistService'
import { ArtistService } from '../ implementations/ArtistService'
import { AlbumService } from '../ implementations/AlbumService'
import { IAlbumService } from '../IAlbumService'
export const container = new Container();

// ! logics
container.bind<IPlayListService>(SYMBOLS.IPlayListService).to(PlayListService).inRequestScope()
container.bind<IArtistService>(SYMBOLS.IArtistService).to(ArtistService).inRequestScope()
container.bind<IAlbumService>(SYMBOLS.IAlbumService).to(AlbumService).inRequestScope()


export const { lazyInject } = getDecorators(container)