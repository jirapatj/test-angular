import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';

import { UserService } from './service/user.service';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'todo',
        component: TodoComponent
      },
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TodoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
