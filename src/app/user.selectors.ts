import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducer';
import { IWorldData } from './worldData';

const getUserFeatureState = createFeatureSelector<State>('covidData');

export const getworldDatasState = createSelector(
  getUserFeatureState,
  (state: State) =>  state!=undefined ? state.worldDatas : null
);

export const getworldCountriesState = createSelector(
  getworldDatasState,
  (state: IWorldData) =>  state!=undefined ? state.Countries : null
);

export const getGlobalState = createSelector(
  getworldDatasState,
  (state: IWorldData) => state!=undefined ?  state.Global : null
);

export const getError = createSelector(
  getUserFeatureState,
  (state : State) => state.error
);
