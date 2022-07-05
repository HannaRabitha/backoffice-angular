
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import employeeData from '../../data/employee.json';  
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddDialogComponent } from 'src/app/add-dialog/add-dialog.component';
import { ApiService } from 'src/app/services/api.service';
import { MatSort } from '@angular/material/sort';


// interface Employee {
//   id: number;
//   username: string;
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// const ELEMENT_DATA: Employee[] = employeeData;


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements AfterViewInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName', 'email', 'action'];
  // dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA);


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private api : ApiService) { }
  
  openAddDialog() {
    this.dialog.open(AddDialogComponent, {
      width:'30%'
      // data: {
      //   animal: 'panda',
      // },
    });
  }

  getAllEmployee() {
    this.api.getEmpolyee().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error: (err) => {
        console.log("error while fetching data");
      }
    })

  }
  

  ngAfterViewInit() {
    this.getAllEmployee()
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



