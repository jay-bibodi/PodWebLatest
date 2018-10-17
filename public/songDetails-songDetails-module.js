(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["songDetails-songDetails-module"],{

/***/ "./node_modules/ngx-soundmanager2/fesm5/ngx-soundmanager2.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-soundmanager2/fesm5/ngx-soundmanager2.js ***!
  \*******************************************************************/
/*! exports provided: MusicPlayerEventConstants, ClearPlaylistDirective, DecreaseVolumeDirective, IncreaseVolumeDirective, MusicPlayerDirective, MuteMusicDirective, NextTrackDirective, PauseMusicDirective, PlayAllDirective, PlayFromPlaylistDirective, PlayMusicDirective, PreviousTrackDirective, RemoveFromPlaylistDirective, RepeatMusicDirective, StopMusicDirective, NgxSoundmanager2Module, HumanTimePipe, MusicPlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerEventConstants", function() { return MusicPlayerEventConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearPlaylistDirective", function() { return ClearPlaylistDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecreaseVolumeDirective", function() { return DecreaseVolumeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncreaseVolumeDirective", function() { return IncreaseVolumeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerDirective", function() { return MusicPlayerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuteMusicDirective", function() { return MuteMusicDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTrackDirective", function() { return NextTrackDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseMusicDirective", function() { return PauseMusicDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayAllDirective", function() { return PlayAllDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayFromPlaylistDirective", function() { return PlayFromPlaylistDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayMusicDirective", function() { return PlayMusicDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousTrackDirective", function() { return PreviousTrackDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFromPlaylistDirective", function() { return RemoveFromPlaylistDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatMusicDirective", function() { return RepeatMusicDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopMusicDirective", function() { return StopMusicDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSoundmanager2Module", function() { return NgxSoundmanager2Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanTimePipe", function() { return HumanTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerService", function() { return MusicPlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var MusicPlayerEventConstants = {
    ANGULAR_PLAYER_READY: 'angularPlayer:ready',
    // CURRENT_TRACK_DURATION = 'currentTrack:duration',
    // CURRENT_TRACK_POSITION = 'currentTrack:position',
    MUSIC_IS_PLAYING: 'music:isPlaying',
    MUSIC_MUTE: 'music:mute',
    MUSIC_REPEAT: 'music:repeat',
    MUSIC_VOLUME: 'music:volume',
    PLAYER_PLAYLIST: 'player:playlist',
    SOUND_MANAGER_READY: 'Sound manager ready!',
    TRACK_ID: 'track:id',
    TRACK_LOADED: 'track:loaded',
    TRACK_STOP: 'track:stop',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MusicPlayerUtils = /** @class */ (function () {
    function MusicPlayerUtils() {
    }
    /**
     *
     * @param track
     */
    /**
     *
     * @param {?} track
     * @return {?}
     */
    MusicPlayerUtils.IsTrackValid = /**
     *
     * @param {?} track
     * @return {?}
     */
    function (track) {
        if (typeof track === 'undefined') {
            console.warn('invalid track data');
            return false;
        }
        if (track.url.indexOf('soundcloud') > -1) {
            // if soundcloud url
            if (typeof track.url === 'undefined') {
                console.warn('invalid soundcloud track url');
                return false;
            }
        }
        else {
            if (soundManager.canPlayURL(track.url) !== true) {
                console.warn('invalid song url');
                return false;
            }
        }
        return true;
    };
    /**
     * getIndexByValue used by this service
     */
    /**
     * getIndexByValue used by this service
     * @param {?} array
     * @param {?} value
     * @return {?}
     */
    MusicPlayerUtils.GetIndexByValue = /**
     * getIndexByValue used by this service
     * @param {?} array
     * @param {?} value
     * @return {?}
     */
    function (array, value) {
        for (var /** @type {?} */ i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            }
        }
        return -1;
    };
    /**
     * To check if value is in array
     */
    /**
     * To check if value is in array
     * @param {?} array
     * @param {?} value
     * @return {?}
     */
    MusicPlayerUtils.IsInArray = /**
     * To check if value is in array
     * @param {?} array
     * @param {?} value
     * @return {?}
     */
    function (array, value) {
        for (var /** @type {?} */ i = 0; i < array.length; i++) {
            if (array[i].id === value) {
                return i;
            }
        }
        return -1;
    };
    /**
     * asyncLoop
     * @param o
     */
    /**
     * asyncLoop
     * @param {?} o
     * @return {?}
     */
    MusicPlayerUtils.AsyncLoop = /**
     * asyncLoop
     * @param {?} o
     * @return {?}
     */
    function (o) {
        var /** @type {?} */ i = -1;
        var /** @type {?} */ loop = function () {
            i++;
            if (i === o.length) {
                o.callback();
                return;
            }
            o.functionToLoop(loop, i);
        };
        loop(); // init
    };
    return MusicPlayerUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MusicPlayerService = /** @class */ (function () {
    function MusicPlayerService(setupOptions) {
        this.setupOptions = setupOptions;
        this.currentTrack = null;
        this.repeat = false;
        this.autoPlay = true;
        this.isPlaying = false;
        this.trackProgress = 0;
        this.volume = 90;
        this.playlist = [];
        this.musicPlayerEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.musicPlayerMuteEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.musicPlayerRepeatEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.musicPlayerStopEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.musicPlayerTrackEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.musicPlayerVolumeEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.init(setupOptions);
    }
    /**
     * Initialize soundmanager,
     * requires soundmanager2 to be loaded first
     */
    /**
     * Initialize soundmanager,
     * requires soundmanager2 to be loaded first
     * @param {?=} setupOptions
     * @return {?}
     */
    MusicPlayerService.prototype.init = /**
     * Initialize soundmanager,
     * requires soundmanager2 to be loaded first
     * @param {?=} setupOptions
     * @return {?}
     */
    function (setupOptions) {
        var _this = this;
        if (typeof soundManager === 'undefined') {
            alert('Please include SoundManager2 Library!');
        }
        Object.assign(soundManager.setupOptions, setupOptions);
        soundManager.setupOptions.ignoreMobileRestrictions = true;
        this._soundObject = soundManager.setup({
            preferFlash: false,
            // prefer 100% HTML5 mode, where both supported
            debugMode: false,
            // enable debugging output
            useHTML5Audio: true,
            // http://www.schillmania.com/projects/soundmanager2/doc/#soundmanager-usehtml5audio
            /**
                   * @reference http://www.schillmania.com/projects/soundmanager2/doc/#sm-config
                   * @description onready Events (Callbacks)
                   * Queues an event callback/handler for successful initialization and "ready to use" state of SoundManager 2.
                   * An optional scope parameter can be specified; if none, the callback is scoped to the window.
                   * If onready() is called after successful initialization, the callback will be executed immediately.
                   * The onready() queue is processed before soundManager.onload().
                   */
            onready: function () {
                // Assign instance of this Angular MusicPlayerService to soundManager object
                // so that the SMSound Objects can access it
                soundManager.parent = _this;
                // Ready to use; soundManager.createSound() etc. can now be called.
                // Emit event
                var /** @type {?} */ isSupported = soundManager.ok();
                _this.musicPlayerEventEmitter.emit({
                    event: MusicPlayerEventConstants.ANGULAR_PLAYER_READY,
                    data: isSupported
                });
            },
            /**
                   * @reference http://www.schillmania.com/projects/soundmanager2/doc/#sm-config
                   * @description ontimeout Events (Callbacks)
                   * Queues an event callback/handler for SM2 init failure, processed at (or immediately,
                   * if added after) SM2 initialization has failed, just before soundManager.onerror() is called.
                   * An optional scope parameter can be specified; if none, the callback is scoped to the window.
                   * Additionally, a status object containing success and error->type parameters is passed as an argument to your callback.
                   */
            ontimeout: function () {
                alert('SM2 failed to start. Flash missing, blocked or security error?');
                alert('The status is ' + _this._soundObject.status.success + ', the error type is ' + _this._soundObject.status.error.type);
            },
            defaultOptions: {
                // set global default volume for all sound objects
                autoLoad: false,
                // enable automatic loading (otherwise .load() will call with .play())
                autoPlay: false,
                // enable playing of file ASAP (much faster if "stream" is true)
                from: null,
                // position to start playback within a sound (msec), see demo
                loops: 1,
                // number of times to play the sound. Related: looping (API demo)
                multiShot: false,
                // let sounds "restart" or "chorus" when played multiple times..
                multiShotEvents: false,
                // allow events (onfinish()) to fire for each shot, if supported.
                onid3: null,
                // callback function for "ID3 data is added/available"
                onload: null,
                // callback function for "load finished"
                onstop: null,
                // callback for "user stop"
                onfailure: 'nextTrack',
                // callback function for when playing fails
                onpause: null,
                // callback for "pause"
                onplay: null,
                // callback for "play" start
                onresume: null,
                // callback for "resume" (pause toggle)
                position: null,
                // offset (milliseconds) to seek to within downloaded sound.
                pan: 0,
                // "pan" settings, left-to-right, -100 to 100
                stream: true,
                // allows playing before entire file has loaded (recommended)
                to: null,
                // position to end playback within a sound (msec), see demo
                type: 'audio/mp3',
                // MIME-like hint for canPlay() tests, eg. 'audio/mp3'
                usePolicyFile: false,
                // enable crossdomain.xml request for remote domains (for ID3/waveform access)
                volume: this.volume,
                // self-explanatory. 0-100, the latter being the max.
                /**
                         * SMSound (sound instance) object instance event handler
                         * @note Event handlers are scoped to the relevant sound object,
                         * so the this keyword will point to the sound object on which
                         * the event fired such that its properties can easily be accessed
                         */
                whileloading: function () {
                    soundManager._writeDebug('sound ' + this.id + ' loading, ' + this.bytesLoaded + ' of ' + this.bytesTotal);
                    var /** @type {?} */ trackLoaded = ((this.bytesLoaded / this.bytesTotal) * 100);
                    var /** @type {?} */ musicPlayerService = soundManager.parent;
                    if (musicPlayerService) {
                        musicPlayerService.musicPlayerEventEmitter.emit({
                            event: MusicPlayerEventConstants.TRACK_LOADED,
                            data: trackLoaded
                        });
                    }
                },
                /**
                         * SMSound (sound instance) object instance event handler
                         * @note Event handlers are scoped to the relevant sound object,
                         * so the this keyword will point to the sound object on which
                         * the event fired such that its properties can easily be accessed
                         */
                whileplaying: function () {
                    soundManager._writeDebug('sound ' + this.id + ' playing, ' + this.position + ' of ' + this.duration);
                    var /** @type {?} */ musicPlayerService = soundManager.parent;
                    if (musicPlayerService) {
                        // broadcast current playing track id
                        musicPlayerService.currentTrack = this.id;
                        try {
                            musicPlayerService.trackProgress = ((this.position / this.duration) * 100);
                            musicPlayerService.position = this.position;
                            musicPlayerService.duration = this.duration;
                        }
                        catch (/** @type {?} */ error) {
                            musicPlayerService.trackProgress = 0;
                            musicPlayerService.position = 0;
                            musicPlayerService.duration = 0;
                        }
                        var /** @type {?} */ trackEventData = {
                            trackId: musicPlayerService.currentTrack,
                            trackProgress: musicPlayerService.trackProgress,
                            trackPosition: this.position,
                            trackDuration: this.duration
                        };
                        musicPlayerService.musicPlayerTrackEventEmitter.emit({
                            event: MusicPlayerEventConstants.TRACK_ID,
                            data: trackEventData
                        });
                    }
                },
                /**
                         * SMSound (sound instance) object instance event handler
                         * @note Using ES6 and this refers to the Angular MusicPlayerService instances
                         * instead of the SMSound object instance
                         */
                onfinish: function () {
                    if (_this.autoPlay === true) {
                        _this.nextTrack();
                        var /** @type {?} */ trackEventData = {
                            trackId: _this.currentTrack,
                            trackProgress: _this.trackProgress,
                            trackDuration: 0,
                            trackPosition: 0
                        };
                        _this.musicPlayerTrackEventEmitter.emit({
                            event: MusicPlayerEventConstants.TRACK_ID,
                            data: trackEventData
                        });
                    }
                }
            }
        });
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MusicPlayerService.prototype.setCurrentTrack = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.currentTrack = key;
    };
    /**
     * @return {?}
     */
    MusicPlayerService.prototype.getCurrentTrack = /**
     * @return {?}
     */
    function () {
        return this.currentTrack;
    };
    /**
     * @return {?}
     */
    MusicPlayerService.prototype.currentTrackData = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ trackId = this.getCurrentTrack();
        var /** @type {?} */ currentKey = MusicPlayerUtils.IsInArray(this.playlist, trackId);
        return this.playlist[currentKey];
    };
    /**
     *
     * @param key
     */
    /**
     *
     * @param {?=} key
     * @return {?}
     */
    MusicPlayerService.prototype.getPlaylist = /**
     *
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        if (typeof key === 'undefined') {
            return this.playlist;
        }
        else {
            return this.playlist[key];
        }
    };
    /**
     *
     * @param track
     */
    /**
     *
     * @param {?} track
     * @return {?}
     */
    MusicPlayerService.prototype.addToPlaylist = /**
     *
     * @param {?} track
     * @return {?}
     */
    function (track) {
        this.playlist.push(track);
        // broadcast playlist
        this.musicPlayerEventEmitter.emit({
            event: MusicPlayerEventConstants.PLAYER_PLAYLIST,
            data: this.playlist
        });
    };
    /**
     *
     * @param track
     */
    /**
     *
     * @param {?} track
     * @return {?}
     */
    MusicPlayerService.prototype.addTrack = /**
     *
     * @param {?} track
     * @return {?}
     */
    function (track) {
        // check if track itself is valid and if its url is playable
        if (!MusicPlayerUtils.IsTrackValid) {
            return null;
        }
        // check if song already does not exists then add to playlist
        var /** @type {?} */ inArrayKey = MusicPlayerUtils.IsInArray(this.getPlaylist(undefined), track.id);
        if (inArrayKey < 0) {
            // console.warn('song does not exists in playlist:', track);
            // add to sound manager
            soundManager.createSound({
                id: track.id,
                url: track.url
            });
            // add to playlist
            this.addToPlaylist(track);
        }
        return track.id;
    };
    /**
     * @param {?} song
     * @param {?} index
     * @return {?}
     */
    MusicPlayerService.prototype.removeSong = /**
     * @param {?} song
     * @param {?} index
     * @return {?}
     */
    function (song, index) {
        // if this song is playing stop it
        if (song === this.currentTrack) {
            this.stop();
        }
        // unload from soundManager
        soundManager.destroySound(song);
        // remove from playlist
        this.playlist.splice(index, 1);
        // once all done then broadcast
        this.musicPlayerEventEmitter.emit({
            event: MusicPlayerEventConstants.PLAYER_PLAYLIST,
            data: this.playlist
        });
    };
    /**
     *
     * @param trackId
     * @param isResume
     */
    /**
     *
     * @param {?} trackId
     * @param {?} isResume
     * @return {?}
     */
    MusicPlayerService.prototype.initPlayTrack = /**
     *
     * @param {?} trackId
     * @param {?} isResume
     * @return {?}
     */
    function (trackId, isResume) {
        if (isResume !== true) {
            // stop and unload currently playing track
            this.stop();
            // set new track as current track
            this.setCurrentTrack(trackId);
        }
        // play it
        soundManager.play(trackId);
        var /** @type {?} */ trackEventData = {
            trackId: this.currentTrack,
            trackProgress: this.trackProgress,
            trackDuration: this.duration,
            trackPosition: 0
        };
        this.musicPlayerTrackEventEmitter.emit({
            event: MusicPlayerEventConstants.TRACK_ID,
            data: trackEventData
        });
        // set as playing
        this.isPlaying = true;
        this.musicPlayerEventEmitter.emit({
            event: MusicPlayerEventConstants.MUSIC_IS_PLAYING,
            data: this.isPlaying
        });
    };
    /**
     * Plays currently selected track
     * If the track is already playing, ignore event
     */
    /**
     * Plays currently selected track
     * If the track is already playing, ignore event
     * @return {?}
     */
    MusicPlayerService.prototype.play = /**
     * Plays currently selected track
     * If the track is already playing, ignore event
     * @return {?}
     */
    function () {
        if (!this.isPlaying) {
            var /** @type {?} */ trackToPlay = null;
            // check if no track loaded, else play loaded track
            if (this.getCurrentTrack() === null) {
                if (soundManager.soundIDs.length === 0) {
                    return;
                }
                trackToPlay = soundManager.soundIDs[0];
                this.initPlayTrack(trackToPlay, false);
            }
            else {
                trackToPlay = this.getCurrentTrack();
                this.initPlayTrack(trackToPlay, true);
            }
        }
    };
    /**
     * Toggles Pause state
     */
    /**
     * Toggles Pause state
     * @return {?}
     */
    MusicPlayerService.prototype.pause = /**
     * Toggles Pause state
     * @return {?}
     */
    function () {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
            soundManager.play(this.currentTrack);
        }
        else {
            soundManager.pause(this.getCurrentTrack());
        }
        this.musicPlayerEventEmitter.emit({
            event: MusicPlayerEventConstants.MUSIC_IS_PLAYING,
            data: this.isPlaying
        });
    };
    /**
     * Stops audio playback and clears playback status
     */
    /**
     * Stops audio playback and clears playback status
     * @return {?}
     */
    MusicPlayerService.prototype.stop = /**
     * Stops audio playback and clears playback status
     * @return {?}
     */
    function () {
        // first pause it
        soundManager.pause(this.getCurrentTrack());
        this.isPlaying = false;
        this.resetProgress();
        var /** @type {?} */ trackEventData = {
            trackId: this.currentTrack,
            trackProgress: this.trackProgress,
            trackDuration: 0,
            trackPosition: 0
        };
        this.musicPlayerStopEventEmitter.emit({
            event: MusicPlayerEventConstants.TRACK_STOP,
            data: trackEventData
        });
        soundManager.stopAll();
        soundManager.unload(this.getCurrentTrack());
    };
    /**
     * Plays selected track
     * @param trackId
     */
    /**
     * Plays selected track
     * @param {?} trackId
     * @return {?}
     */
    MusicPlayerService.prototype.playTrack = /**
     * Plays selected track
     * @param {?} trackId
     * @return {?}
     */
    function (trackId) {
        this.initPlayTrack(trackId, false);
    };
    /**
     *
     */
    /**
     *
     * @return {?}
     */
    MusicPlayerService.prototype.nextTrack = /**
     *
     * @return {?}
     */
    function () {
        if (this.getCurrentTrack() === null) {
            console.log('Please click on Play before this action');
            return null;
        }
        var /** @type {?} */ currentTrackKey = MusicPlayerUtils.GetIndexByValue(soundManager.soundIDs, this.getCurrentTrack());
        var /** @type {?} */ nextTrackKey = +currentTrackKey + 1;
        var /** @type {?} */ nextTrack = soundManager.soundIDs[nextTrackKey];
        if (typeof nextTrack !== 'undefined') {
            this.playTrack(nextTrack);
        }
        else {
            // if no next track found
            if (this.repeat === true) {
                // start first track if repeat is on
                this.playTrack(soundManager.soundIDs[0]);
            }
            else {
                // breadcase not playing anything
                this.isPlaying = false;
                this.musicPlayerEventEmitter.emit({
                    event: MusicPlayerEventConstants.MUSIC_IS_PLAYING,
                    data: this.isPlaying
                });
            }
        }
    };
    /**
     *
     */
    /**
     *
     * @return {?}
     */
    MusicPlayerService.prototype.prevTrack = /**
     *
     * @return {?}
     */
    function () {
        if (this.getCurrentTrack() === null) {
            console.log('Please click on Play before this action');
            return null;
        }
        var /** @type {?} */ currentTrackKey = MusicPlayerUtils.GetIndexByValue(soundManager.soundIDs, this.getCurrentTrack());
        var /** @type {?} */ prevTrackKey = +currentTrackKey - 1;
        var /** @type {?} */ prevTrack = soundManager.soundIDs[prevTrackKey];
        if (typeof prevTrack !== 'undefined') {
            this.playTrack(prevTrack);
        }
        else {
            console.warn('no prev track found!');
        }
    };
    /**
     *  Mute/Unmute audio
     */
    /**
     *  Mute/Unmute audio
     * @return {?}
     */
    MusicPlayerService.prototype.mute = /**
     *  Mute/Unmute audio
     * @return {?}
     */
    function () {
        if (soundManager.muted === true) {
            soundManager.unmute();
        }
        else {
            soundManager.mute();
        }
        this.musicPlayerMuteEventEmitter.emit({
            event: MusicPlayerEventConstants.MUSIC_MUTE,
            data: soundManager.muted
        });
    };
    /**
     * Mute Accessor
     */
    /**
     * Mute Accessor
     * @return {?}
     */
    MusicPlayerService.prototype.getMuteStatus = /**
     * Mute Accessor
     * @return {?}
     */
    function () {
        return soundManager.muted;
    };
    /**
     *
     */
    /**
     *
     * @return {?}
     */
    MusicPlayerService.prototype.repeatToggle = /**
     *
     * @return {?}
     */
    function () {
        if (this.repeat === true) {
            this.repeat = false;
        }
        else {
            this.repeat = true;
        }
        this.musicPlayerRepeatEventEmitter.emit({
            event: MusicPlayerEventConstants.MUSIC_REPEAT,
            data: this.repeat
        });
        return false;
    };
    /**
     * @return {?}
     */
    MusicPlayerService.prototype.getRepeatStatus = /**
     * @return {?}
     */
    function () {
        return this.repeat;
    };
    /**
     * @return {?}
     */
    MusicPlayerService.prototype.getVolume = /**
     * @return {?}
     */
    function () {
        return this.volume;
    };
    /**
     *
     * @param increase
     */
    /**
     *
     * @param {?} increase
     * @return {?}
     */
    MusicPlayerService.prototype.adjustVolume = /**
     *
     * @param {?} increase
     * @return {?}
     */
    function (increase) {
        var _this = this;
        var /** @type {?} */ changeVolume = function (volume) {
            for (var /** @type {?} */ i = 0; i < soundManager.soundIDs.length; i++) {
                var /** @type {?} */ mySound = soundManager.getSoundById(soundManager.soundIDs[i]);
                mySound.setVolume(volume);
            }
            _this.musicPlayerVolumeEventEmitter.emit({
                event: MusicPlayerEventConstants.MUSIC_VOLUME,
                data: volume
            });
        };
        if (increase === true) {
            if (this.volume < 100) {
                this.volume = this.volume + 10;
                changeVolume(this.volume);
            }
        }
        else {
            if (this.volume > 0) {
                this.volume = this.volume - 10;
                changeVolume(this.volume);
            }
        }
    };
    /**
     *
     * @param value
     */
    /**
     *
     * @param {?} value
     * @return {?}
     */
    MusicPlayerService.prototype.adjustVolumeSlider = /**
     *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        var /** @type {?} */ changeVolume = function (volume) {
            for (var /** @type {?} */ i = 0; i < soundManager.soundIDs.length; i++) {
                var /** @type {?} */ mySound = soundManager.getSoundById(soundManager.soundIDs[i]);
                mySound.setVolume(volume);
            }
            _this.musicPlayerVolumeEventEmitter.emit({
                event: MusicPlayerEventConstants.MUSIC_VOLUME,
                data: volume
            });
        };
        changeVolume(value);
    };
    /**
     *
     * @param callback
     */
    /**
     *
     * @param {?=} callback
     * @return {?}
     */
    MusicPlayerService.prototype.clearPlaylist = /**
     *
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        this.isPlaying = false;
        this.currentTrack = null;
        this.resetProgress();
        // unload and destroy soundmanager sounds
        var /** @type {?} */ smIdsLength = soundManager.soundIDs.length;
        MusicPlayerUtils.AsyncLoop({
            length: smIdsLength,
            functionToLoop: function (loop /*, i: number*/) {
                setTimeout(function () {
                    // custom code
                    soundManager.destroySound(soundManager.soundIDs[0]);
                    // custom code
                    loop();
                }, 0);
            },
            callback: function () {
                // callback custom code
                // clear playlist
                // callback custom code
                // clear playlist
                _this.playlist = [];
                _this.musicPlayerEventEmitter.emit({
                    event: MusicPlayerEventConstants.PLAYER_PLAYLIST,
                    data: _this.playlist
                });
                if (callback) {
                    // callback custom code
                    callback(true);
                }
            }
        });
    };
    /**
     *
     */
    /**
     *
     * @return {?}
     */
    MusicPlayerService.prototype.resetProgress = /**
     *
     * @return {?}
     */
    function () {
        this.trackProgress = 0;
    };
    /**
     * @return {?}
     */
    MusicPlayerService.prototype.isPlayingStatus = /**
     * @return {?}
     */
    function () {
        return this.isPlaying;
    };
    MusicPlayerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    MusicPlayerService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['setupOptions',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    return MusicPlayerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClearPlaylistDirective = /** @class */ (function () {
    function ClearPlaylistDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    ClearPlaylistDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._musicPlayerService.stop();
        this._musicPlayerService.setCurrentTrack(null);
        this._musicPlayerService.clearPlaylist();
    };
    ClearPlaylistDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[clearPlaylist]'
                },] }
    ];
    /** @nocollapse */
    ClearPlaylistDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    ClearPlaylistDirective.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return ClearPlaylistDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DecreaseVolumeDirective = /** @class */ (function () {
    function DecreaseVolumeDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    DecreaseVolumeDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._musicPlayerService.adjustVolume(false);
    };
    DecreaseVolumeDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[decreaseVolume]'
                },] }
    ];
    /** @nocollapse */
    DecreaseVolumeDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    DecreaseVolumeDirective.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return DecreaseVolumeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IncreaseVolumeDirective = /** @class */ (function () {
    function IncreaseVolumeDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    IncreaseVolumeDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._musicPlayerService.adjustVolume(true);
    };
    IncreaseVolumeDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[increaseVolume]'
                },] }
    ];
    /** @nocollapse */
    IncreaseVolumeDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    IncreaseVolumeDirective.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return IncreaseVolumeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MusicPlayerDirective = /** @class */ (function () {
    function MusicPlayerDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    MusicPlayerDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ trackId;
        if (this.song) {
            trackId = this._musicPlayerService.addTrack(this.song);
            if (this.musicPlayer === 'play') {
                this._musicPlayerService.playTrack(trackId);
            }
        }
    };
    MusicPlayerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[musicPlayer]'
                },] }
    ];
    /** @nocollapse */
    MusicPlayerDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    MusicPlayerDirective.propDecorators = {
        "musicPlayer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "song": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return MusicPlayerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MuteMusicDirective = /** @class */ (function () {
    function MuteMusicDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    MuteMusicDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._musicPlayerService.mute();
    };
    MuteMusicDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[muteMusic]'
                },] }
    ];
    /** @nocollapse */
    MuteMusicDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    MuteMusicDirective.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return MuteMusicDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NextTrackDirective = /** @class */ (function () {
    function NextTrackDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    NextTrackDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._musicPlayerService.nextTrack();
    };
    NextTrackDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[nextTrack]'
                },] }
    ];
    /** @nocollapse */
    NextTrackDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    NextTrackDirective.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return NextTrackDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PauseMusicDirective = /** @class */ (function () {
    function PauseMusicDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    PauseMusicDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._musicPlayerService.pause();
    };
    PauseMusicDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[pauseMusic]'
                },] }
    ];
    /** @nocollapse */
    PauseMusicDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    PauseMusicDirective.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return PauseMusicDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PlayAllDirective = /** @class */ (function () {
    function PlayAllDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
        this.play = true;
    }
    /**
     * @return {?}
     */
    PlayAllDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._musicPlayerService.clearPlaylist(function () {
            for (var /** @type {?} */ i = 0; i < _this.songs.length; i++) {
                _this._musicPlayerService.addTrack(_this.songs[i]);
            }
            if (_this.play) {
                // play first song
                // play first song
                _this._musicPlayerService.play();
            }
        });
    };
    PlayAllDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[playAll]'
                },] }
    ];
    /** @nocollapse */
    PlayAllDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    PlayAllDirective.propDecorators = {
        "songs": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "play": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return PlayAllDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PlayFromPlaylistDirective = /** @class */ (function () {
    function PlayFromPlaylistDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    PlayFromPlaylistDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._musicPlayerService.playTrack(this.song.id);
    };
    PlayFromPlaylistDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[playFromPlaylist]'
                },] }
    ];
    /** @nocollapse */
    PlayFromPlaylistDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    PlayFromPlaylistDirective.propDecorators = {
        "song": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return PlayFromPlaylistDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PlayMusicDirective = /** @class */ (function () {
    function PlayMusicDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    PlayMusicDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._musicPlayerService.play();
    };
    PlayMusicDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[playMusic]'
                },] }
    ];
    /** @nocollapse */
    PlayMusicDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    PlayMusicDirective.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return PlayMusicDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PreviousTrackDirective = /** @class */ (function () {
    function PreviousTrackDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    PreviousTrackDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._musicPlayerService.prevTrack();
    };
    PreviousTrackDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[previousTrack]'
                },] }
    ];
    /** @nocollapse */
    PreviousTrackDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    PreviousTrackDirective.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return PreviousTrackDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RemoveFromPlaylistDirective = /** @class */ (function () {
    function RemoveFromPlaylistDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    RemoveFromPlaylistDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        console.log('remove:', this.index);
        this._musicPlayerService.removeSong(this.song.id, this.index);
    };
    RemoveFromPlaylistDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[removeFromPlaylist]'
                },] }
    ];
    /** @nocollapse */
    RemoveFromPlaylistDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    RemoveFromPlaylistDirective.propDecorators = {
        "song": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return RemoveFromPlaylistDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RepeatMusicDirective = /** @class */ (function () {
    function RepeatMusicDirective(_musicPlayerService, _element) {
        this._musicPlayerService = _musicPlayerService;
        this._element = _element;
    }
    /**
     * @return {?}
     */
    RepeatMusicDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.repeat = this._musicPlayerService.getRepeatStatus();
        this.highlight();
        // Subscribe for repeat changes to update bindings
        this._musicPlayerRepeatSubscription = this._musicPlayerService.musicPlayerRepeatEventEmitter
            .subscribe(function (event) {
            _this.repeat = event.data;
            _this.highlight();
        });
    };
    /**
     * @return {?}
     */
    RepeatMusicDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._musicPlayerRepeatSubscription.unsubscribe();
    };
    /**
     * Element click event handler
     * @return {?}
     */
    RepeatMusicDirective.prototype.onClick = /**
     * Element click event handler
     * @return {?}
     */
    function () {
        this._musicPlayerService.repeatToggle();
    };
    /**
     * Change background color of element based on repeat state
     * @return {?}
     */
    RepeatMusicDirective.prototype.highlight = /**
     * Change background color of element based on repeat state
     * @return {?}
     */
    function () {
        this._element.nativeElement.style.backgroundColor = this.repeat ? 'green' : 'red';
    };
    RepeatMusicDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[repeatMusic]'
                },] }
    ];
    /** @nocollapse */
    RepeatMusicDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    RepeatMusicDirective.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return RepeatMusicDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StopMusicDirective = /** @class */ (function () {
    function StopMusicDirective(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
    }
    /**
     * @return {?}
     */
    StopMusicDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._musicPlayerService.stop();
    };
    StopMusicDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[stopMusic]'
                },] }
    ];
    /** @nocollapse */
    StopMusicDirective.ctorParameters = function () { return [
        { type: MusicPlayerService, },
    ]; };
    StopMusicDirective.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    };
    return StopMusicDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HumanTimePipe = /** @class */ (function () {
    function HumanTimePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HumanTimePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ min = (value / 1000 / 60) << 0;
        var /** @type {?} */ sec = Math.round((value / 1000) % 60);
        return this.pad(min) + ':' + this.pad(sec);
    };
    /**
     * Pads string with zeros if less than 10
     * @param {?} d
     * @return {?}
     */
    HumanTimePipe.prototype.pad = /**
     * Pads string with zeros if less than 10
     * @param {?} d
     * @return {?}
     */
    function (d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    };
    HumanTimePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'humanTime' },] }
    ];
    return HumanTimePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxSoundmanager2Module = /** @class */ (function () {
    function NgxSoundmanager2Module() {
    }
    /**
     * @param {?=} setupOptions
     * @return {?}
     */
    NgxSoundmanager2Module.forRoot = /**
     * @param {?=} setupOptions
     * @return {?}
     */
    function (setupOptions) {
        return {
            ngModule: NgxSoundmanager2Module,
            providers: [
                MusicPlayerService,
                { provide: 'setupOptions', useValue: setupOptions }
            ]
        };
    };
    NgxSoundmanager2Module.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        ClearPlaylistDirective,
                        DecreaseVolumeDirective,
                        IncreaseVolumeDirective,
                        MusicPlayerDirective,
                        MuteMusicDirective,
                        NextTrackDirective,
                        PauseMusicDirective,
                        PlayAllDirective,
                        PlayFromPlaylistDirective,
                        PlayMusicDirective,
                        PreviousTrackDirective,
                        RemoveFromPlaylistDirective,
                        RepeatMusicDirective,
                        StopMusicDirective,
                        HumanTimePipe
                    ],
                    exports: [
                        ClearPlaylistDirective,
                        DecreaseVolumeDirective,
                        IncreaseVolumeDirective,
                        MusicPlayerDirective,
                        MuteMusicDirective,
                        NextTrackDirective,
                        PauseMusicDirective,
                        PlayAllDirective,
                        PlayFromPlaylistDirective,
                        PlayMusicDirective,
                        PreviousTrackDirective,
                        RemoveFromPlaylistDirective,
                        RepeatMusicDirective,
                        StopMusicDirective,
                        HumanTimePipe
                    ]
                },] }
    ];
    /** @nocollapse */
    NgxSoundmanager2Module.ctorParameters = function () { return []; };
    return NgxSoundmanager2Module;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=ngx-soundmanager2.js.map


/***/ }),

/***/ "./src/app/songDetails/songDetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/songDetails/songDetails.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.sub-title {\n  margin-left: 20px;\n}\n\n.fill-space {\n  flex: 1 1 auto;\n}\n\n.button-row {\n  justify-content: space-around;\n  margin-bottom: 5px;\n}\n\n.songs {\n  margin-left: -200px;\n}\n\n.song-title-btn {\n  text-align: right;\n  width: 300px;\n}\n\n.play-btns {\n  margin-top: 20px;\n}\n\n.playlist-title {\n  margin-top: 20px;\n}\n\n.playlist {\n  padding-bottom: 30px;\n}\n"

/***/ }),

/***/ "./src/app/songDetails/songDetails.component.html":
/*!********************************************************!*\
  !*** ./src/app/songDetails/songDetails.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-icon card-header-rose\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">info</i>\n            </div>\n            <h4 class=\"card-title\">Podcast Details\n            </h4>\n          </div>\n          <div class=\"card-body\">\n            <form>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <img class=\"card-img-top\" src={{srcValue}} alt=\"Card image cap\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Title:&nbsp;&nbsp;</label>\n                    <label class=\"bmd-label-floating\">{{podcastName}}</label><br />\n                    <label class=\"bmd-label-floating\">Artist Name:&nbsp;&nbsp; </label>\n                    <label class=\"bmd-label-floating\">{{artistName}}</label><br />\n                    <label class=\"bmd-label-floating\">Tags:&nbsp;&nbsp; </label>\n                    <label class=\"bmd-label-floating\">{{Tag}}</label><br />\n                    <label class=\"bmd-label-floating\" *ngIf=\"isPaid\">{{podcastCost}}</label><br />\n                    <div class=\"row\">\n                      <div class=\"col-md-2\" style=\"text-align:right\">\n                        {{ currentTrackPostion | humanTime }}\n                      </div>\n                      <div class=\"progress col-md-6\" style=\"height: 5px; width: 100%; margin-top: 10px;\">\n                        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" [ngStyle]=\"{width : progress }\">\n                          <span class=\"sr-only\"></span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-2\">\n                        {{ currentTrackDuration | humanTime }}\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div *ngFor=\"let song of songs\" class=\"songs\">\n                        <div class=\"button-row\">\n                          <button mat-button color=\"primary\" class=\"song-title-btn\" [musicPlayer]=\"'play'\" [song]=\"song\">\n                            <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n                          </button>\n                          <button mat-button color=\"accent\" pauseMusic>\n                            <i class=\"fa fa-pause\" aria-hidden=\"true\"></i>\n                          </button>\n                          <button mat-button color=\"warn\" stopMusic>\n                            <i class=\"fa fa-stop\" aria-hidden=\"true\"></i>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-12\" style=\"margin-top: 50px;\">\n                    <mat-form-field>\n                        <textarea matInput placeholder=\"Enter Comments\"></textarea></mat-form-field>\n                        <div class=\"card-footer text-right\">\n                            <div class=\"form-check mr-auto\"></div>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-rose\" (click)=\"postComment()\">Comment</button>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-rose\" (click)=\"clearComment()\">Cancel</button>\n                        </div>\n                    <div *ngFor=\"let comment of comments\">\n                        \n                            <label class=\"bmd-label-floating\">{{comment.whoCommented}},&nbsp;&nbsp;</label>\n                            <label class=\"bmd-label-floating\">{{comment.whenCommented}}&nbsp;&nbsp;</label>\n                        \n                          <mat-form-field>\n                              <input [disabled]=\"true\" type=\"text\" matInput value=\"{{comment.commentsDescription}}\"></mat-form-field>\n                        \n                      </div>\n                </div>\n              </div>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n<!--<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <div style=\"width: 20rem;\">\n                    <img class=\"card-img-top\" src=\"https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                      \n                      <div class=\"button-row\">\n                        <button mat-raised-button color=\"primary\" playMusic>\n                          <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n                        </button>\n                        <button mat-raised-button color=\"accent\" pauseMusic>\n                          <i class=\"fa fa-pause\" aria-hidden=\"true\"></i>\n                        </button>\n                        <button mat-raised-button color=\"warn\" stopMusic>\n                          <i class=\"fa fa-stop\" aria-hidden=\"true\"></i>\n                        </button>\n                        <button mat-raised-button repeatMusic>Repeat</button>\n                      </div>\n                  \n                      <h5 class=\"mat-body\">Volume: {{ volume }}</h5>\n                  \n                      <div class=\"button-row\">\n                        <button mat-raised-button color=\"primary\" increaseVolume>+</button>\n                        <button mat-raised-button color=\"accent\" decreaseVolume>-</button>\n                        <button mat-raised-button muteMusic>Mute ({{ mute }})</button>\n                      </div>\n                  \n                      <div class=\"button-row\">\n                        <button mat-icon-button color=\"primary\" previousTrack>\n                          <i class=\"fa fa-step-backward\" aria-hidden=\"true\"></i>\n                        </button>\n                        <button mat-icon-button color=\"primary\" nextTrack>\n                          <i class=\"fa fa-step-forward\" aria-hidden=\"true\"></i>\n                        </button>\n                        <button mat-raised-button color=\"primary\" clearPlaylist>Clear Playlist</button>\n                      </div>\n                  \n                      <h5 class=\"mat-title playlist-title\">Playlist:</h5>\n                  \n                      <div class=\"playlist\">\n                        <div *ngFor=\"let song of playlist; index as i;\">\n                          <a playFromPlaylist [song]=\"song\">{{ song.title }}</a>\n                          <a removeFromPlaylist [song]=\"song\" [index]=\"i\">\n                            <small>(remove)</small>\n                          </a>\n                          <span *ngIf=\"currentPlaying && currentPlaying.id == song.id\"> - (current)</span>\n                        </div>\n                      </div>\n                    </div>\n                    </div>\n                  </div>\n                  <div>\n                    <div class=\"progress\" style=\"height: 2px; width: 100%;\">\n                      <div class=\"progress-bar progress-bar-success\"\n                           role=\"progressbar\"\n                           [ngStyle]=\"{width : progress }\">\n                        <span class=\"sr-only\"></span>\n                      </div>\n                    </div>\n                    \n                    <p *ngIf=\"currentPlaying\" class=\"mat-body\">\n                      Currently Playing: {{ currentPlaying.title }} by {{ currentPlaying.artist }} ({{ currentTrackPostion | humanTime }} / {{ currentTrackDuration | humanTime }})\n                    </p>\n                \n                    \n                  \n  \n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n  <div style=\"text-align:center; margin: 8px;\">\n    <h1 class=\"mat-h1\">\n      Welcome to {{ title }}!\n    </h1>\n  \n    <div>\n      <h5 class=\"mat-title\">Songs</h5>\n      <div *ngFor=\"let song of songs\" class=\"songs\">\n        <div class=\"button-row\">\n          <button mat-button color=\"primary\" class=\"song-title-btn\" [musicPlayer]=\"'play'\" [song]=\"song\">\n            {{ song.title }}\n          </button>\n          <button mat-mini-fab color=\"accent\" musicPlayer [song]=\"song\">+</button>\n        </div>\n      </div>\n  \n      <div class=\"button-row play-btns\">\n        <button mat-raised-button color=\"primary\" playAll [songs]=\"songs\">Play all</button>\n        <button mat-raised-button color=\"accent\" playAll [songs]=\"songs\" [play]=\"false\">Add all</button>\n      </div>\n    </div>\n  \n    <hr /> \n  \n    \n  </div>\n  \n  \n-->"

/***/ }),

/***/ "./src/app/songDetails/songDetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/songDetails/songDetails.component.ts ***!
  \******************************************************/
/*! exports provided: SongDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongDetailsComponent", function() { return SongDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_soundmanager2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-soundmanager2 */ "./node_modules/ngx-soundmanager2/fesm5/ngx-soundmanager2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongDetailsComponent = /** @class */ (function () {
    function SongDetailsComponent(_musicPlayerService) {
        this._musicPlayerService = _musicPlayerService;
        this.title = 'the ngx-soundmanager2 demo';
        this.songs = [
            {
                id: 'one',
                title: 'Kick It',
                artist: 'Raised On Zenith',
                url: 'https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=10442536bc89f9881e8da2eb81ecd5fb&id=120877506&stream=1&ts=1502502685.0'
            } /*,
            {
              id: 'two',
              title: 'How Long',
              artist: 'Raised On Zenith',
              url: 'https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=468f1ed20aae2aba824fb4e6923ff850&id=470307233&stream=1&ts=1502595994.0'
            },
            {
              id: 'three',
              title: 'Details and Structures',
              artist: 'Air This Side of Caution',
              url: 'http://lukefarran.com/music/AirThisSideOfCaution/NatureWillTurnOnUs/02_Details%26Structures.mp3'
            },
            {
              id: 'four',
              title: 'Here We Go',
              artist: 'Air This Side of Caution',
              url: 'http://lukefarran.com/music/AirThisSideOfCaution/NatureWillTurnOnUs/03_HereWeGo.mp3'
            },
            {
              id: 'five',
              title: 'Without You',
              artist: 'The Assembly',
              url: 'http://lukefarran.com/music/TheAssembly/TheFutureHasBeenSold_LukeMaster/07_WithoutYou.mp3'
            }*/
        ];
        this.comments = [
            {
                whoCommented: 'xyz',
                whenCommented: '10/08/2018',
                commentsDescription: 'I really liked this podcast'
            },
            {
                whoCommented: 'abc',
                whenCommented: '10/08/2018',
                commentsDescription: 'I did not like this podcast'
            },
        ];
        // 
        this.podcastName = "Kick It";
        this.artistName = "Raised On Zenith";
        this.Tag = "Kick, It";
        this.podcastCost = "";
        this.isPaid = false;
    }
    SongDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.srcValue = "https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80";
        // Subscribe for mute changes to update bindings
        this.mute = this._musicPlayerService.getMuteStatus();
        this._musicPlayerMuteSubscription = this._musicPlayerService.musicPlayerMuteEventEmitter
            .subscribe(function (event) {
            _this.mute = event.data;
        });
        // Subscribe for track changes
        this.currentPlaying = this._musicPlayerService.currentTrackData();
        this._musicPlayerTrackIdSubscription = this._musicPlayerService.musicPlayerTrackEventEmitter
            .subscribe(function (event) {
            _this.currentPlaying = _this._musicPlayerService.currentTrackData();
            _this.currentTrackPostion = event.data.trackPosition;
            _this.currentTrackDuration = event.data.trackDuration;
            _this.currentTrackProgress = event.data.trackProgress;
        });
        // subscribe for volume changes
        this.volume = this._musicPlayerService.getVolume();
        this._musicPlayerVolumeSubscription = this._musicPlayerService.musicPlayerVolumeEventEmitter
            .subscribe(function (event) {
            _this.volume = event.data;
        });
    };
    SongDetailsComponent.prototype.ngOnDestroy = function () {
        this._musicPlayerMuteSubscription.unsubscribe();
        this._musicPlayerTrackIdSubscription.unsubscribe();
        this._musicPlayerVolumeSubscription.unsubscribe();
    };
    Object.defineProperty(SongDetailsComponent.prototype, "progress", {
        get: function () {
            return this.currentTrackProgress ? (this.currentTrackProgress.toString() + '%') : '0%';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SongDetailsComponent.prototype, "playlist", {
        get: function () {
            return this._musicPlayerService.getPlaylist();
        },
        enumerable: true,
        configurable: true
    });
    SongDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-songDetails-cmp',
            template: __webpack_require__(/*! ./songDetails.component.html */ "./src/app/songDetails/songDetails.component.html"),
            styles: [__webpack_require__(/*! ./songDetails.component.css */ "./src/app/songDetails/songDetails.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_soundmanager2__WEBPACK_IMPORTED_MODULE_1__["MusicPlayerService"]])
    ], SongDetailsComponent);
    return SongDetailsComponent;
}());



/***/ }),

/***/ "./src/app/songDetails/songDetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/songDetails/songDetails.module.ts ***!
  \***************************************************/
/*! exports provided: SongDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongDetailsModule", function() { return SongDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _songDetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./songDetails.component */ "./src/app/songDetails/songDetails.component.ts");
/* harmony import */ var _songDetails_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./songDetails.routing */ "./src/app/songDetails/songDetails.routing.ts");
/* harmony import */ var ngx_soundmanager2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-soundmanager2 */ "./node_modules/ngx-soundmanager2/fesm5/ngx-soundmanager2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { FlexLayoutModule } from '@angular/flex-layout';




var SongDetailsModule = /** @class */ (function () {
    function SongDetailsModule() {
    }
    SongDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_soundmanager2__WEBPACK_IMPORTED_MODULE_7__["NgxSoundmanager2Module"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_songDetails_routing__WEBPACK_IMPORTED_MODULE_6__["SongDetailsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_songDetails_component__WEBPACK_IMPORTED_MODULE_5__["SongDetailsComponent"]]
        })
    ], SongDetailsModule);
    return SongDetailsModule;
}());



/***/ }),

/***/ "./src/app/songDetails/songDetails.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/songDetails/songDetails.routing.ts ***!
  \****************************************************/
/*! exports provided: SongDetailsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongDetailsRoutes", function() { return SongDetailsRoutes; });
/* harmony import */ var _songDetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songDetails.component */ "./src/app/songDetails/songDetails.component.ts");

var SongDetailsRoutes = [
    {
        path: '',
        children: [{
                path: 'tables/latestPodcast/:id',
                component: _songDetails_component__WEBPACK_IMPORTED_MODULE_0__["SongDetailsComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=songDetails-songDetails-module.js.map