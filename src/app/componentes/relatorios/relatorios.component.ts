import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/Models/compra.models';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css'],
})
export class RelatoriosComponent implements OnInit {
  compras!: Compra[];

  constructor() {}

  ngOnInit() {
    this.obterCompras();
  }

  obterCompras() {
    this.compras = [
      {
        produto: 'Macchiatella',
        quantidade: 2,
        valor: 40,
        endereco: 'RJ/Rua das Flores, 137',
        telefone: 2134567890
      },
      {
        produto: 'Café Espresso',
        quantidade: 1,
        valor: 8,
        endereco: 'SC/Avenida das Acácias 45',
        telefone: 47976543210
      },
      {
        produto: 'Prensa Francesa',
        quantidade: 3,
        valor: 30,
        endereco: 'SP/Rua São Jorge, 890',
        telefone: 11982334455
      }
    ];
  }
}
