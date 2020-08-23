import { Component} from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as UserActions from './user.actions';
import * as fromUser from './user.selectors';
import { ICountryData } from './worldData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NgRx-Angular';
  countryDatas : ICountryData[];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new UserActions.LoadUsers()); // action dispatch
    this.store.pipe(select(fromUser.getworldCountriesState)).subscribe((users) => {
      this.countryDatas=users;
    });
  }
}
