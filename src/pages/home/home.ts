import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { DetalhesContatosPage } from '../detalhes-contatos/detalhes-contatos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


    contatos;

    pessoa: Array <{codigo: any; nome: string; telefone: string; email: string}>;
    pessoaTodos: Array <{codigo: any; nome: string; telefone: string; email: string}>;

  constructor(public navCtrl: NavController, public servidor: ServidorProvider) {
    this.pessoa = [];
    this.getRetornar();
  }


  getRetornar(){

    this.servidor.getPegar()
      .subscribe(
        data => {
          
          this.contatos = data;
          
          for(let i = 0; i < data.length; i++){

            this.pessoa.push({
              codigo: data[i]["codigo"],
              nome: data[i]["nome"],
              telefone: data[i]["telefone"],
              email: data[i]["email"]
            });
          }
          this.pessoaTodos = this.pessoa;
        }
                        
        )
        err => console.log(err); 
      }


      detalhe(contato: any){

        this.navCtrl.push(DetalhesContatosPage, {detalhes: contato});
      }


      getContatos(ev: any) {
        // Reset items back to all of the items
          
        // set val to the value of the searchbar
        const val = ev.target.value;
    
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.pessoa = this.pessoaTodos.filter((contato) => {
            return (contato.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }else{
          this.pessoa = this.pessoaTodos;
        }
      }
    }
