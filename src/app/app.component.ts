import { Component,OnInit,EventEmitter } from '@angular/core';
import { PhoneService } from './phone.service';
import { PhoneList } from './phone-list';
import { NgForm } from '@angular/forms';
import {FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'phoneApp';

  page = 1;
  pageSize = 4;
  collectionSize = 0;

  phonenumber ='';

  phoneList?: any;

  constructor(private phoneService:PhoneService) { }



  mobNumberPattern = "^((\\?)|0)?[0-7]{10}$";
  isValidFormSubmitted = false;

  ngOnInit() {
   
  }
  

  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
       return;
    }
    this.isValidFormSubmitted = true;
    this.phoneService.getPhoneList(this.phonenumber).subscribe(data =>{
      this.phoneList =data;
      this.page = 1;
      this.pageSize = 6;
      this.collectionSize = this.phoneList.length;
      })

    //form.resetForm();
 }

  get phonenumberList(): PhoneList[] {
    //alert('1');
    return this.phoneList
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  set phonenumberList(array:PhoneList[]){
    this.phonenumberList =array;
  }

}
