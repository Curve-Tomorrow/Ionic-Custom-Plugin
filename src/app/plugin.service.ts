import { Injectable } from '@angular/core';
import { cordova, IonicNativePlugin } from '@ionic-native/core';


@Injectable()
export class PluginService extends IonicNativePlugin {
  static pluginName = 'videorecorder';
  static plugin = 'cordova-plugin-videorecording';
  static pluginRef = 'VideoRecorder';
  static repo = 'https://github.com/KhadijaDaruwala/Cordova-Plugin-Example.git';
  static platforms = ['iOS']

  // add(num1, num2): Promise<any> {
  //   const x = cordova(this, 'add', {}, [{ param1: num1, param2: num2 }])
  //   return x;
  // }

  // subtract(num1, num2): Promise<any> {
  //   const x = cordova(this, 'subtract', {}, [{ param1: num1, param2: num2 }])
  //   return x;
  // }

  startRecording(): Promise<any> {
    const x = cordova(this, 'startRecording', {}, [])
    return x;
  }
}