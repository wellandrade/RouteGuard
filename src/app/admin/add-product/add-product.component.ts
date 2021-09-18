import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SafeData } from 'src/app/interfaces/safe-data.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, SafeData {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl(''),
      quantity: new FormControl('')
    });

  }
  isDataSaved(): boolean {
    return this.form.dirty;
  }

  ngOnInit(): void {
  }

}
