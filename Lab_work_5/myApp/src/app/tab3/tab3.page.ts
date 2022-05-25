import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Video } from "../Video";
import { VIDEOS } from "../Videos";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  videos: Video[] = VIDEOS;

  constructor(public nav: NavController) { }

  OpenNavVideoPlay(id: number) {
    this.nav.navigateForward("/videoplay/" + id);
    console.log("teste" + id);
  }
}
