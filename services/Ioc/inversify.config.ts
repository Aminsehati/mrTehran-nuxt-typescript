import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'
import { PlayListService } from '../ implementations/PlayListService'
import { IPlayListService } from '../IPlayListService'
import { SYMBOLS } from './SYMBOLS'
export const container = new Container()

// ! logics
container.bind<IPlayListService>(SYMBOLS.IPlayListService).to(PlayListService).inRequestScope()


export const { lazyInject } = getDecorators(container)