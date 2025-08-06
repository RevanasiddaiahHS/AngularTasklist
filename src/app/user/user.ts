import { Component, computed, input, Input } from '@angular/core';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // get userImage() {
  //   return 'assets/users/' + this.avatar;
    
  // }
  avatar=input.required<string>();
  name=input.required<string>();

  userImage=computed(()=> 'assets/users/'+this.avatar() )
}
