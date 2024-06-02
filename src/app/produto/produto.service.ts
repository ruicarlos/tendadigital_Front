import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroments';

const SERVER_URL = environment.serverApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  listagem(idUsuario: number) {
    return this.http.get(`${SERVER_URL}produtos/S`);
   // return this.http.get(`https://tendadigital-4f1a6cdc4579.herokuapp.com/produtos/S`);
   // return this.http.get(`http://localhost:8085/produtos/S`);
  }
}
