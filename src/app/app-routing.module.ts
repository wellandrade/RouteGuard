import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoadGuard } from './auth/load-guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule),
    /* 
    canActivate      --> verificar se tem permissao para acessar a rota 
    canActivateChild --> verificar se tem permissao para acessar as rotas filhas 
    canDeactivate    --> verificar se existe preenchimento no form antes de sair da rota 
    canLoad          --> quando usado com LazyNodule, verifica se pode carregar determinado 
      modulo quando clicar na rota 
    */ 
    canLoad: [LoadGuard]
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
