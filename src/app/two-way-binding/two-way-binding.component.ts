import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
resetInput() {
this.userName = ''
}
  userName = ""
createUserName(userName: Event) {
throw new Error('Method not implemented.');
}
}
