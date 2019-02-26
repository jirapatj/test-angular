import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name: string;
  private email: string;
  private age: number;

  //dictionary
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }

  //array
  private skills: string[];

  constructor() {

  }

  ngOnInit() {
    this.name = 'Jirapat';
    this.age = 30;
    this.email = 'jirapat@mail.com';

    this.address = {
      street: '123/123',
      city: 'Bangkok',
      province: 'Bangkok',
      postcode: '10160'
    }

    this.skills = ['Java', 'Angular']
  }

  addSkill(skill) {
    this.skills.unshift(skill);
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1)
      }
    });
  }

}
