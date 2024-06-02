import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criar-conta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.css'
})
export class CriarContaComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required]
    });
  }

  criarConta(): void {
    if (this.form.valid) {
      const conta = this.form.value;
      console.log('Conta criada:', conta);
      // Lógica para criar conta
    }
  }
}
