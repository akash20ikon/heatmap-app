import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * @method get
   * @description Method for http get request
   * @param url - An object containing the URL end point
   */
  // public get<T>(url: string): Observable<T>{
  //   return this.http.get<T>(url, { observe: 'response' })
  //          .pipe(map(resp => resp.body));
  // }
  public get<T>(url: string): any{
       return this.http.get<T>(url, { observe: 'response' })
              .pipe(map(resp => resp.body));
    }

  /**
   * @method post
   * @description Method for http post request
   * @param url - An object containing the end point
   * @param body - An object containing the body
   */
  public post<T>(url: string, body:any): Observable<HttpResponse<T>> {
    return this.http.post<HttpResponse<T>>(url, body);
  }

}
