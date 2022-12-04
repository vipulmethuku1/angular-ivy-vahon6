import { Component, VERSION } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  userModel = new User(
    '',
    'vipulmethuku1@gmail.com',
    9160352120,
    'default',
    'Morning',
    true
  );

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onSubmit() {

    console.log(this.userModel)
  }
}
