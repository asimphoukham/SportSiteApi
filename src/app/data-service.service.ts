import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iinjuries } from './iinjuries';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  getUrl(url: string): Observable<Iinjuries> {
    return this.http.get<Iinjuries>(url, { headers: { authorization: 'Basic Zjg0MjgwMjYtMGY1Yi00NzViLTk2YzUtYjIxN2JkOlRlYWhvdXNlMSE=' } });
    // my API KEY f8428026-0f5b-475b-96c5-b217bd
  }
}
