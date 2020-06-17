import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

@Plugin({
  pluginName:'mathcalculator',
  plugin:'cordova-plugin-mathcalculator'
})

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  constructor() { }
}
