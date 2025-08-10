import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { type Usert } from './user.model';
import { Card } from '../shared/card/card';
// type Usert={
//  id: string;
//     avatar: string;
//     name: string;
// }

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: Usert;
  @Input({ required: true }) selected!: boolean;
  //@Output() selectUser = new EventEmitter();

  selectUser = output<string>();

  get userImage() {
    return 'assets/users/' + this.user.avatar;
  }
  selecedtUser() {
    this.selectUser.emit(this.user.id);
  }
}
