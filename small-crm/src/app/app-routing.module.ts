import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'info', pathMatch: 'full'},
  {path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule)},
  {path: 'input', loadChildren: () => import('./input/input.module').then(m => m.InputModule)},
  // {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  {path: 'logout', loadChildren: () => import('./logout/logout.module').then(m => m.LogoutModule)},
  {path: '**', redirectTo: 'info', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
