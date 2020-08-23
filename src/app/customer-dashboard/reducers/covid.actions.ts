import { Action } from '@ngrx/store';

export enum CovidActionTypes {
  LoadCovids = '[Covid] Load Covids',
  LoadCovidsSuccess = '[Covid] Load Covids Success',
  LoadCovidsFailure = '[Covid] Load Covids Failure',
}

export class LoadCovids implements Action {
  readonly type = CovidActionTypes.LoadCovids;
}

export class LoadCovidsSuccess implements Action {
  readonly type = CovidActionTypes.LoadCovidsSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadCovidsFailure implements Action {
  readonly type = CovidActionTypes.LoadCovidsFailure;
  constructor(public payload: { error: any }) { }
}

export type CovidActions = LoadCovids | LoadCovidsSuccess | LoadCovidsFailure;

