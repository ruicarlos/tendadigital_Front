import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';

@NgModule({
  declarations: [
    ReactiveFormsModule,
    ProdutoComponent,
    CarrinhoComponent,
    CriarContaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProdutoComponent]
})
export class AppModule { }
