import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Importando dependências
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// Se não está logado, roteia para 'login'
const toLogin = () => redirectUnauthorizedTo(['/usuario/entrar']);

// Se está logado, roteia para a 'raiz'
const isLogged = () => redirectLoggedInTo(['/']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    // Acessível somente para usuário não logado
    path: 'usuario/entrar',
    loadChildren: () => import('./usuario/entrar/entrar.module').then(m => m.EntrarPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: isLogged }
  },
  {
    // Acessível somente para usuário logado
    path: 'usuario/sair',
    loadChildren: () => import('./usuario/sair/sair.module').then(m => m.SairPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  {
    // Acessível somente para usuário logado
    path: 'usuario/perfil',
    loadChildren: () => import('./usuario/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  },
  //{
    // Acessível somente para usuário logado
    // path: 'usuario/novo',
    // loadChildren: () => import('./usuario/novo/novo.module').then(m => m.NovoPageModule),
    // canActivate: [AngularFireAuthGuard],
   // data: { authGuardPipe: toLogin }
  // },
  {
    // Acessível somente para usuário logado
    path: 'usuario/editar',
    loadChildren: () => import('./usuario/editar/editar.module').then(m => m.EditarPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin }
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
