import { Component } from '@angular/core';
import { PluginService } from '../plugin.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public pluginService: PluginService) { 
  }

}
