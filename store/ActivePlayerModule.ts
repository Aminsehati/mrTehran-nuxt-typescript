import { Module, VuexModule, VuexMutation } from "nuxt-property-decorator";
import { ActivePlayer } from "~/Model/activePlayer.model";
import { Track } from "~/Model/track.model";


@Module({ name: 'ActivePlayerModule', stateFactory: true, namespaced: true })
export default class ActivePlayerModule extends VuexModule {
    private _player: ActivePlayer = {
        audio: "",
        idPlayer: "",
        audioDuration: "",
        audioCurrentTime: "",
        imgUrl: "",
        playing: false,
        trackName: "",
        hasAlbum: false,
        albumID: "",
        artists: []
    }

    public get getPlayer(): any {
        return this._player
    }

    @VuexMutation public setAudio(audio: any) {
        this._player.audio = audio
    }

    @VuexMutation public setChnageStatusPlayer(status: boolean) {
        this._player.playing = status
    }

    @VuexMutation public setAudioDuration(time: string | number) {
        this._player.audioDuration = time;
    }

    @VuexMutation public setAudioCurrentTime(time: string | number) {
        this._player.audioCurrentTime = time;
    }


    @VuexMutation public setActivePlayer(item: Track) {
        console.log('otem', item);
        this._player = {
            ...this._player,
            idPlayer: item._id,
            imgUrl: item.imgUrl,
            trackName: item.trackName,
            artists: item.artists
        }
    }

    @VuexMutation private resetActivePlayer() {
        this._player = {
            audio: "",
            audioDuration: "",
            audioCurrentTime: "",
            imgUrl: "",
            playing: false,
            trackName: "",
            hasAlbum: false,
            albumID: "",
            idPlayer: "",
            artists: []
        }
    }

}