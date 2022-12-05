import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UsuarioProtest } from 'src/app/interfaces/usuarioProTest';

const listUsuarios: UsuarioProtest[] = [
  {dni:65854526,nombre: 'Juana',
  tipoViolencia:'Psic,Fis',
  riesgo:'Leve',
   motivacionCambioE:'A',
  copersmithE:'Medio Alto',
  tomaDecisionesE:26,
  nivelTomaDecisionesE:'Capacidad Suficiente', 
  sensacionControlPoE:45,
  sensacionControlNeE:11,
  deseoControlE:38,
  controlInternoE:4,
  controlExternoE:3,
  autonomiaE:'Positiva,Deseo Control,Control Interna'},

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
  selector: 'app-tabla-avances-protest',
  templateUrl: './tabla-avances-protest.component.html',
  styleUrls: ['./tabla-avances-protest.component.css']
})
export class TablaAvancesProtestComponent implements OnInit {

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
