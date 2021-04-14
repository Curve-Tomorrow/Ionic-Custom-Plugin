import { Injectable } from '@angular/core';
import { cordova, IonicNativePlugin } from '@ionic-native/core';


@Injectable()
export class PluginService extends IonicNativePlugin {
  static pluginName = 'videorecorder';
  static plugin = 'cordova-plugin-videorecording';
  static pluginRef = 'VideoRecorder';
  static repo = 'https://github.com/KhadijaDaruwala/Cordova-Plugin-Example.git';
  static platforms = ['iOS']

  startRecording(): Promise<any> {
    console.log('recording called')
    const x = cordova(this, 'startRecording', {}, [])
    return x;
  }
}