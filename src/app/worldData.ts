export interface ICountryData {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: string;
  TotalConfirmed: string;
  NewDeaths: string;
  TotalDeaths: string;
  NewRecovered: string;
  TotalRecovered: string;
  Date: string;
}

export interface IGlobalData {
  NewConfirmed: string;
  TotalConfirmed: string;
  NewDeaths: string;
  TotalDeaths: string;
  NewRecovered: string;
  TotalRecovered: string;
}

export interface IWorldData {
  Global : IGlobalData,
  Countries : ICountryData[]
}
