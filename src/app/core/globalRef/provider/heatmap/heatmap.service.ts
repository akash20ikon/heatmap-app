import { Injectable } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HeatmapService {

  constructor(private apiService: ApiService) { }

  /**
   * @method getData
   * @description Method to fetch the JSON response over http
   * @param url - string value pointing to http url
   * @return service response data
   */
  public getData<T>(url: string): Observable<T> {
    return this.apiService.get(url);
  }


 /**
  * @method post
  * @description Method for http post request
  * @param url - An object containing the end point
  * @param body - An object containing the body
  * @return service response data
  */
  public postData<T>(url: string, body:any): Observable<HttpResponse<T>> {
    return this.apiService.post(url , body);
  }
}
