import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from '../../constants/api.config';
import { environment } from '../../../../environments/environment';
import { PersonCard } from '../../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient:HttpClient) { }

  getPersonDetails(id:number){
    const headers = { Authorization: environment.tmdbToken };
    console.log(headers);
    return this.httpClient.get<any>(ApiEndpoints.personDetails(id),{headers});
  }
}
