import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesContatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-contatos',
  templateUrl: 'detalhes-contatos.html',
})
export class DetalhesContatosPage {

  contatos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.contatos = this.navParams.get('detalhes');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesContatosPage');
  }

}
