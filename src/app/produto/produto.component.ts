import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Produto } from './entidades.model';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from './Carrinho.service';


@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent  implements OnInit {
  listaProduto: Produto[] = []; 

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.produtoService.listagem(3)
      .subscribe((produtos:any) => {
        this.listaProduto = produtos; 
        console.log("Produtos:", this.listaProduto);
      });
  }
  
  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionarProduto(produto);
  }

}
