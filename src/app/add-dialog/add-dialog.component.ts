import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
  

export class AddDialogComponent implements OnInit {


  addForm !: FormGroup;

  constructor(private formBuildder : FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<AddDialogComponent>) { }

  
  ngOnInit(): void {
    this.addForm = this.formBuildder.group({
      id:  (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1),
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

 

  addData() {
    console.log(this.addForm.value);

    
    if (this.addForm.valid) {
      this.api.postEmployee(this.addForm.value).subscribe({
        next: (rest) => {
          alert("Data added!")
          this.addForm.reset();
          this.dialogRef.close();
        },
        error: () => {
          alert("Error while adding the data!")
        }
      })
    }
  }

}
