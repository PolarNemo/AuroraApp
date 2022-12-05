import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UsuarioPretest } from 'src/app/interfaces/usuarioPreTest';

const listUsuarios: UsuarioPretest[] = [
  {dni:65854526,nombre: 'Juana',
  tipoViolencia:'Psic,Fis',
  riesgo:'Leve',
   motivacionCambioE:'A',
  copersmithE:'Medio Alto',
  tomaDecisionesE:12,
  nivelTomaDecisionesE:'Incipiente', 
  sensacionControlPoE:32,
  sensacionControlNeE:10,
  deseoControlE:34,
  controlInternoE:3,
  controlExternoE:3,
  autonomiaE:'Positiva,Deseo Control,Control Externo'},

  {dni:65854526,nombre: 'Vanessa',
  tipoViolencia:'Psic,Fis',
  riesgo:'Leve',
   motivacionCambioE:'C',
  copersmithE:'Bajo',
  tomaDecisionesE:16,
  nivelTomaDecisionesE:'En proceso', 
  sensacionControlPoE:32,
  sensacionControlNeE:17,
  deseoControlE:31,
  controlInternoE:4,
  controlExternoE:4,
  autonomiaE:'Control positiva,Control Interno'},

  {dni:65854526,nombre: 'Vanessa',
  tipoViolencia:'Psic,Fis',
  riesgo:'Leve',
   motivacionCambioE:'C',
  copersmithE:'Bajo',
  tomaDecisionesE:16,
  nivelTomaDecisionesE:'En proceso', 
  sensacionControlPoE:32,
  sensacionControlNeE:17,
  deseoControlE:31,
  controlInternoE:4,
  controlExternoE:4,
  autonomiaE:'Control positiva,Control Interno'},

  {dni:65854526,nombre: 'Vanessa',
  tipoViolencia:'Psic,Fis',
  riesgo:'Leve',
   motivacionCambioE:'C',
  copersmithE:'Bajo',
  tomaDecisionesE:16,
  nivelTomaDecisionesE:'En proceso', 
  sensacionControlPoE:32,
  sensacionControlNeE:17,
  deseoControlE:31,
  controlInternoE:4,
  controlExternoE:4,
  autonomiaE:'Control positiva,Control Interno'},

  {dni:65854526,nombre: 'Vanessa',
  tipoViolencia:'Psic,Fis',
  riesgo:'Leve',
   motivacionCambioE:'C',
  copersmithE:'Bajo',
  tomaDecisionesE:16,
  nivelTomaDecisionesE:'En proceso', 
  sensacionControlPoE:32,
  sensacionControlNeE:17,
  deseoControlE:31,
  controlInternoE:4,
  controlExternoE:4,
  autonomiaE:'Control positiva,Control Interno'},

  {dni:65854526,nombre: 'Vanessa',
  tipoViolencia:'Psic,Fis',
  riesgo:'Leve',
   motivacionCambioE:'C',
  copersmithE:'Bajo',
  tomaDecisionesE:16,
  nivelTomaDecisionesE:'En proceso', 
  sensacionControlPoE:32,
  sensacionControlNeE:17,
  deseoControlE:31,
  controlInternoE:4,
  controlExternoE:4,
  autonomiaE:'Control positiva,Control Interno'},

  {dni:65854526,nombre: 'Vanessa',
  tipoViolencia:'Psic,Fis',
  riesgo:'Leve',
   motivacionCambioE:'C',
  copersmithE:'Bajo',
  tomaDecisionesE:16,
  nivelTomaDecisionesE:'En proceso', 
  sensacionControlPoE:32,
  sensacionControlNeE:17,
  deseoControlE:31,
  controlInternoE:4,
  controlExternoE:4,
  autonomiaE:'Control positiva,Control Interno'},

  {dni:65854526,nombre: 'Vanessa',
  tipoViolencia:'Psic,Fis',
  riesgo:'Leve',
   motivacionCambioE:'C',
  copersmithE:'Bajo',
  tomaDecisionesE:16,
  nivelTomaDecisionesE:'En proceso', 
  sensacionControlPoE:32,
  sensacionControlNeE:17,
  deseoControlE:31,
  controlInternoE:4,
  controlExternoE:4,
  autonomiaE:'Control positiva,Control Interno'},

  {dni:65854526,nombre: 'Vanessa',
  tipoViolencia:'Psic,Fis',
  riesgo:'Leve',
   motivacionCambioE:'C',
  copersmithE:'Bajo',
  tomaDecisionesE:16,
  nivelTomaDecisionesE:'En proceso', 
  sensacionControlPoE:32,
  sensacionControlNeE:17,
  deseoControlE:31,
  controlInternoE:4,
  controlExternoE:4,
  autonomiaE:'Control positiva,Control Interno'},

  {dni:65854526,nombre: 'Vanessa',
  tipoViolencia:'Psic,Fis',
  riesgo:'Leve',
   motivacionCambioE:'C',
  copersmithE:'Bajo',
  tomaDecisionesE:16,
  nivelTomaDecisionesE:'En proceso', 
  sensacionControlPoE:32,
  sensacionControlNeE:17,
  deseoControlE:31,
  controlInternoE:4,
  controlExternoE:4,
  autonomiaE:'Control positiva,Control Interno'},
  
 
];
@Component({
  selector: 'app-tabla-avancesPretest',
  templateUrl: './tabla-avancesPretest.component.html',
  styleUrls: ['./tabla-avancesPretest.component.css']
})
export class TablaAvancesPretestComponent implements OnInit {

  displayedColumns: string[] = ['dni','nombre', 'tipoViolencia', 'riesgo', 'motivacionCambioE','copersmithE','tomaDecisionesE','nivelTomaDecisionesE',
  'sensacionControlPoE','sensacionControlNeE','deseoControlE','controlInternoE','controlExternoE','autonomiaE'];
  dataSource = new MatTableDataSource(listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;   
  }

}
