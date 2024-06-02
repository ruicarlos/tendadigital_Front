import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({


  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    LoginComponent,
    ProdutoComponent,

  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tenda Digital';
}
