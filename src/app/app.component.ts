import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  defaultValues: Contact;

  countries: Country[] = [
    { id: 1, name: "India" },
    { id: 2, name: "Japan" },
    { id: 3, name: "USA" },
    { id: 4, name: "UK" },
    { id: 5, name: "Malaysia"}
  ]

  ngOnInit(): void {
    this.defaultValues = {
      name: 'Jeevika S',
      age: 22,
      gender: 'female',
      country: '2', 
      address: {
        street: 'Mullai Street',
        city: 'Bangalore',
        pincode: '654321'
      }
    };
  }
  Onsubmit(form:NgForm):void{
    console.log(form.value);
  }

}
class Country{
  id:number;
  name:string;
}
