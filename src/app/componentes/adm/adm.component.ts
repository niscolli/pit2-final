import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css'],
})
export class AdmComponent implements OnInit {
  usuario: any = '';
  senha: any = '';
  isLoading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  async login() {
    this.isLoading = true;

    setTimeout(() => {
      if (this.usuario === 'teste' && this.senha === 'teste') {
        this.router.navigate(['/adm/relatorios']);
      } else {
        alert('Usuário ou senha incorretos');
      }

      this.isLoading = false;
    }, 2000); 
  }
}
