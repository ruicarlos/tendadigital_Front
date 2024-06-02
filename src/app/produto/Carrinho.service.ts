import { Injectable } from '@angular/core';
import { Produto } from './entidades.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: Produto[] = [];

  adicionarProduto(produto: Produto): void {
    this.itens.push(produto);
  }

  obterItens(): Produto[] {
    return this.itens;
  }

  limparCarrinho(): void {
    this.itens = [];
  }
}
