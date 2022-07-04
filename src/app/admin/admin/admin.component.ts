
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import employeeData from '../../data/employee.json';  
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';


interface Employee {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: Employee[] = employeeData;


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName', 'email', 'action'];
  dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addData() {
    console.log("Tambah Data");
    
  }
}



// export class AdminComponent implements OnInit {

//   constructor() { }

//   employees: Employee[]=employeeData;
 
//   displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName', 'email', 'action'];
  
//   dataSource = this.employees;
//   ngOnInit(): void {
//   }
// }



