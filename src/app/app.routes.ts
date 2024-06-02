import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';

export const routes: Routes = [
  {path: 'produto', component: ProdutoComponent},
  {path: 'logar', component: LoginComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'criar-cotna', component: CriarContaComponent},
  {path: '', redirectTo: 'produto', pathMatch: 'full'}
];
