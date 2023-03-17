import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { options } from 'src/app/siteConfig';
import { ActiveClientObj } from '../../common-layout_i/common-layout_i';
import { getActiveClient } from '../../utility functions/common-utils';

@Injectable({
  providedIn: 'root'
})
export class FormbuilderService {

  constructor(private http: HttpClient) { }



  checkFieldSatus(url,params):Observable<any>{
    let activeClient:ActiveClientObj = getActiveClient();
    let baseUrl = activeClient.url
    return this.http.get(baseUrl+url+"&data="+JSON.stringify(params),options).pipe(
      map(res=>res),
      catchError(err=>throwError(err))
    )               
  }
}
