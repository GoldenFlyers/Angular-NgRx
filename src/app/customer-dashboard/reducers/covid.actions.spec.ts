import * as CovidActions from './covid.actions';

describe('Covid', () => {
  it('should create an instance', () => {
    expect(new CovidActions.LoadCovids()).toBeTruthy();
  });
});
