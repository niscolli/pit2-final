import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { AdmComponent } from './componentes/adm/adm.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { RelatoriosComponent } from './componentes/relatorios/relatorios.component';
import { FinalizarCompraComponent } from './componentes/finalizar-compra/finalizar-compra.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'adm',
    component: AdmComponent,
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: 'adm/relatorios',
    component: RelatoriosComponent,
  },
  { path: 'finalizar-compra', component: FinalizarCompraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
