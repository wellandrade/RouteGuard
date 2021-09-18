import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SafeData } from 'src/app/interfaces/safe-data.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, SafeData {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        name: new FormControl(''),
        email: new FormControl('')
      }
    )

  }

  isDataSaved(): boolean {
    return this.form.dirty;  
  }

  ngOnInit(): void {
  }

}
