import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../interface/User';
import { HttpObserve } from '@angular/common/http/src/client';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name: string;
  private email: string;
  private age: number;
  private toggleForm: boolean;

  //dictionary
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }

  private user: User;

  //array
  private skills: string[];
  private users: User[];

  //Injection Service
  constructor(private userService: UserService) { }

  ngOnInit() {
    //init value
    this.toggleForm = false;
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

    this.user = {} as User;
    this.userService.getUserList().subscribe((response) => {
      this.users = response.body;
    })
  }

  toggleEditForm() {
    this.toggleForm = !this.toggleForm;
    return false;
  }

  // function binding
  getUser(user) {
    this.user = user;
    return false;
  }

  // function binding
  saveUser(user) {
    this.user = user;
    console.log(user);
    console.log('call API save')
    this.user = {} as User;
    return false;
  }

  // function binding
  addSkill(skill) {
    this.skills.unshift(skill);
    return false;
  }

  // function binding
  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1)
      }
    });
  }

}
