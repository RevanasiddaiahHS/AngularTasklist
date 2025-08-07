import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string;
  protected readonly title = signal('first-angular-app');
  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
