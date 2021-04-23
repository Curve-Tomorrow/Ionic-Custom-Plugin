import { Component, OnInit } from '@angular/core';
import { PluginService } from '../plugin.service';

//declare cordova:any

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public param1;
  public param2;

  constructor(public pluginService: PluginService) {
  }

  startRecording() {
    this.pluginService.startRecording().then(
      (data) => console.log("startRecording", data['video']))
      .catch((error) => console.error(error))
  }
}
