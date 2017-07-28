import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class ApphttpclientService {

  constructor(private http:Http) { }
  
  get(url) {
    return this.http.get(url);
  }

  post(url, data) {
    return this.http.post(url, data);
  }

}
