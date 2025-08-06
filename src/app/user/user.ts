import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  @Output() selectUser = new EventEmitter();
  
  get userImage() {
    return 'assets/users/' + this.avatar;
  }
  selecedtUser() {
    this.selectUser.emit(this.id);
  }
}
