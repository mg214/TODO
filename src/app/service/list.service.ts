import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { List } from '../interface/list';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listsUrl = 'api/lists';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

}
