/*import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, IonicNativePlugin } from '@ionic-native/core';

@Plugin({
  pluginName:'mathcalculator',
  plugin:'cordova-plugin-mathcalculator'
})

@Injectable()
export class PluginService {

  
}
*/

import { Injectable } from '@angular/core';
import { cordova, IonicNativePlugin } from '@ionic-native/core';


@Injectable()
export class PluginService extends IonicNativePlugin {
  static pluginName = 'mathcalculator';
  static plugin = 'cordova-plugin-mathcalculator';
  static pluginRef = 'MathCalculator';
  static repo = 'https://github.com/KhadijaDaruwala/Cordova-Plugin-Example.git';
  static platforms = ['iOS']

  add(num1, num2): Promise<any> {
    const x = cordova(this, 'add', {}, [{ param1: num1, param2: num2 }])
    return x;
  }

  substract(num1, num2): Promise<any> {
    const x = cordova(this, 'substract', {}, [{ param1: num1, param2: num2 }])
    return x;
  }

}