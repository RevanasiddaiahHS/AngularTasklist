import { Component, EventEmitter, Input, output, Output } from '@angular/core';

// type Usert={
//  id: string;
//     avatar: string;
//     name: string;
// }
interface Usert{
  id: string;
    avatar: string;
    name: string;
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: Usert;

  //@Output() selectUser = new EventEmitter();

  selectUser = output<string>();

  get userImage() {
    return 'assets/users/' + this.user.avatar;
  }
  selecedtUser() {
    this.selectUser.emit(this.user.id);
  }
}
