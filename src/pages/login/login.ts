import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public servior:ServidorProvider, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  logar(){
    if(this.email == undefined || this.senha == undefined){
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        message: 'Preencha todos os campos!',
        buttons: ['OK']
      })
      alert.present();
    }else{

       this.http.get(this.servior.urlGet()+'login.php?email='+this.email+'&senha='+this.senha).pipe(map( res => res.json()))
       .subscribe(
         dados => {
            if(dados.msg.logado == "sim"){

                if(dados.dados.status == "Ativo"){
                  this.navCtrl.setRoot(HomePage);
                }else{
                  let alert = this.alertCtrl.create({
                    title: 'Atenção',
                    message: 'Usuários sem permissão!',
                    buttons: [
                      'OK'
                    ]
                  
                  })
                  alert.present();
                }
                
            }else{
              let alert = this.alertCtrl.create({
                title: 'Atenção',
                message: 'Usuários inváido!',
                buttons: [
                  'OK'
                ]
              
              })
              alert.present();
            }
         }
       )

    }


  }

}
