import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUser = 'u1'

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!
  }


  onSelectUser(id: string){
    this.selectedUser = id;
  }
}
