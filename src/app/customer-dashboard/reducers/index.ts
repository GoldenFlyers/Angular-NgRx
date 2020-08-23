import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCovid from './covid.reducer';

export const stateFeatureKey = 'state';

export interface State {

  [fromCovid.covidFeatureKey]: fromCovid.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromCovid.covidFeatureKey]: fromCovid.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
