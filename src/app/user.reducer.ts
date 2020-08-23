import { IWorldData } from './worldData';
import { UserActions, UserActionTypes } from './user.actions';
export const userFeatureKey = 'covidData';

export interface State {
  worldDatas: IWorldData;
  error: string;
}

export const initialState: State = {
  error: '',
  worldDatas: undefined,
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return {
        ...state,
      };

    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        error: '',
        worldDatas: action.payload.data,
      };

    case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        worldDatas: undefined,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
