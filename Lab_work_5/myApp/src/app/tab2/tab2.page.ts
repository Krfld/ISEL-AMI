import { Component, ViewChild } from '@angular/core';
import { ActionSheetController, IonSlides, ModalController } from '@ionic/angular';

import { Player } from "../Player";
import { PLAYERS } from "../Players";

import { ModalpagePage } from "../modalpage/modalpage.page";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('slides') slides: IonSlides;
  selected_index = 0;

  players: Player[] = PLAYERS;

  constructor(public actionSheetController: ActionSheetController, public modalCtrl: ModalController) { }

  async openMenu() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Player',
      mode: 'ios',
      buttons: [{
        text: 'Play Video',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
          this.presentModal();
        }
      }, {
        text: 'Follow',
        icon: 'logo-twitter',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  getInfo() {
    this.slides.getActiveIndex().then(data => {
      console.log("active index", data);
      this.selected_index = data;
    });
  }

  async presentModal() {
    this.getInfo();
    let url = this.players[this.selected_index].url;
    const modal = await this.modalCtrl.create({
      component: ModalpagePage,
      componentProps: { value: url }
    });
    return await modal.present();
  }
}
