import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';

const listUsuarios: Usuario[] = [
  {dni:85632542,nombre: 'Melissa', apellidos: 'Salazar Carrera', edad: 25, preTest: 'Incompleto',proTest: 'Incompleto'},
  {dni:63524965,nombre: 'Vannesa', apellidos: 'Mendoza Ramires', edad: 28, preTest: 'Completo',proTest: 'Incompleto'},
  {dni:23587564,nombre: 'Carla', apellidos: 'Carolina Perez', edad: 27, preTest: 'Incompleto',proTest: 'Incompleto'},
  {dni:96258735,nombre: 'Julia', apellidos: 'Rojas Perez', edad: 30, preTest: 'Incompleto',proTest: 'Incompleto'},
  {dni:96352185,nombre: 'Paola', apellidos: 'Salazar Carrera', edad: 45, preTest: 'Incompleto',proTest: 'Incompleto'},
  {dni:92453614,nombre: 'Sara', apellidos: 'Mendoza Ramires', edad: 18, preTest: 'Completo',proTest: 'Incompleto'},
  {dni:35635842,nombre: 'Veronica', apellidos: 'Carolina Perez', edad: 35, preTest: 'Incompleto',proTest: 'Incompleto'},
  {dni:96235485,nombre: 'Cecilia', apellidos: 'Rojas Perez', edad: 50, preTest: 'Incompleto',proTest: 'Incompleto'},
  {dni:35635842,nombre: 'Veronica', apellidos: 'Carolina Perez', edad: 35, preTest: 'Incompleto',proTest: 'Incompleto'},
  {dni:96235485,nombre: 'Cecilia', apellidos: 'Rojas Perez', edad: 50, preTest: 'Incompleto',proTest: 'Incompleto'},
 
];

@Component({
  selector: 'app-tabla-paciente',
  templateUrl: './tabla-paciente.component.html',
  styleUrls: ['./tabla-paciente.component.css']
})
export class TablaPacienteComponent implements OnInit {

  displayedColumns: string[] = ['dni','nombre', 'apellidos', 'edad', 'preTest','proTest','formularioPre','formularioPro','acciones'];
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
