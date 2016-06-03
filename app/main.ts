import {bootstrap} from '@angular/platform-browser-dynamic';

import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';

import {provide} from '@angular/core';
import {Renderer} from '@angular/core';

import {OVERLAY_CONTAINER_TOKEN} from '@angular2-material/core/overlay/overlay';
import {MdLiveAnnouncer} from '@angular2-material/core/live-announcer/live-announcer';
import {createOverlayContainer} from '@angular2-material/core/overlay/overlay-container';
import {MdGestureConfig} from '@angular2-material/core/gestures/MdGestureConfig';

import {AppComponent} from './components/app.component';

bootstrap(AppComponent, [
    MdLiveAnnouncer,
    provide(OVERLAY_CONTAINER_TOKEN, {useValue: createOverlayContainer()}),
    Renderer,
    provide(HAMMER_GESTURE_CONFIG, {useClass: MdGestureConfig})
]);