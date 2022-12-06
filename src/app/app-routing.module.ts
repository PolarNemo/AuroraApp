import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PopUpSuccess } from './InfoPopUs/popupsuccess/popupsuccess.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesRoutingModule } from './pages/pages--routing.module';


const routes: Routes = [
  {path: '', redirectTo:'/login',pathMatch:'full'},
  {path: 'info', component:PopUpSuccess},
  {path: '**',component:NopageFoundComponent},
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes),PagesRoutingModule,AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
