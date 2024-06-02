import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/entidades.model';
import { CarrinhoService } from '../produto/Carrinho.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  itens: Produto[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.itens = this.carrinhoService.obterItens();
  }

  finalizarPedido(): void {
    // Lógica para finalizar o pedido
    console.log('Pedido finalizado');
    this.carrinhoService.limparCarrinho();
  }
}
