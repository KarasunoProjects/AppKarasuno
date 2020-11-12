import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// Importando dependências
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// Se não está logado, roteia para 'login'
const toLogin = () => redirectUnauthorizedTo(['/usuario/entrar']);

// Se está logado, roteia para a 'raiz'
const isLogged = () => redirectLoggedInTo(['/']);

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/app/inicio',
        pathMatch: 'full'
      },
      {
        // Acessível somente para usuário logado
        path: 'teste01',
        loadChildren: () => import('../app/teste01/teste01.module').then(m => m.Teste01PageModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: toLogin }
      },
      {
        // Acessível somente para usuário não logado
        path: 'teste02',
        loadChildren: () => import('../app/teste02/teste02.module').then(m => m.Teste02PageModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: isLogged }
      },
      {
        path: 'teste03',
        loadChildren: () => import('../app/teste03/teste03.module').then(m => m.Teste03PageModule)
      },
      {
        // Acessível somente para usuário logado
        path: 'config',
        loadChildren: () => import('../pages/config/config.module').then(m => m.ConfigPageModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: toLogin }
      },
      {
        path: 'inicio',
        loadChildren: () => import('../pages/inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'contatos',
        loadChildren: () => import('../pages/contatos/contatos.module').then(m => m.ContatosPageModule)
      },
      {
        path: 'sobre',
        loadChildren: () => import('../pages/sobre/sobre.module').then(m => m.SobrePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
