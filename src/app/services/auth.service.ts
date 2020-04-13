import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public login(object){
    return this.httpClient.post<any>(this.url+'auth/token', object)
    .pipe(map(result => {
      if (result.status == 0){
        sessionStorage.setItem('access_token', result.access_token);  
      }
      return result;
    }));
  }

}
