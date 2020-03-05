import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  getCountries(): string[] {
    const countrieslist = ['India', 'Australia', 'UnitedStates', 'Singapore', 'Malaysia'];
    return countrieslist;

  }
}
