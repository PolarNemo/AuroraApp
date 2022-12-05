import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { PretestComponent } from './usuarios/pretest/pretest.component';
import { ProtestComponent } from './usuarios/protest/protest.component';
import { AutoestimaComponent } from './usuarios/cuestionarios/autoestima/autoestima.component';
import { AutonomiaComponent } from './usuarios/cuestionarios/autonomia/autonomia.component';
import { DecisionesComponent } from './usuarios/cuestionarios/decisiones/decisiones.component';
import { MotivacionComponent } from './usuarios/cuestionarios/motivacion/motivacion.component';


const routes:Routes=[
  {path:'dashboard', component:PagesComponent,
   children:[
    {path:'',component:DashboardComponent},
    {path:'usuarios',component:UsuariosComponent},   
    {path:'reportes',component:ReportesComponent},
    {path:'crear-usuario',component:CrearUsuarioComponent},
    {path:'pretest',component:PretestComponent},
    {path:'protest',component:ProtestComponent},
    {path:'autoestima',component:AutoestimaComponent},
    {path:'autonomia',component:AutonomiaComponent},
    {path:'decisiones',component:DecisionesComponent},
    {path:'motivacion',component:MotivacionComponent}
   ]   
  },  
  
]

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
