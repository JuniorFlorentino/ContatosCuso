import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

/*
  Generated class for tttte ServidorProvider provider.

  See ularttps://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServidorProvider {

    url: string = "http://localhost/curso/contatosList/ContatosCuso/php/";

  constructor(public  http: Http) {
    console.log('ttello ServidorProvider Provider');
  }

  urlGet(){
    return this.url;
  }

    getPegar(){
        return this.http.get(this.url+'dados.php').pipe(map(res => res.json()));
    }


}
