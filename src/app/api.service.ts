import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: any = 'http://localhost/restapi_codeigniter3/index.php/api/';

  constructor(public http: HttpClient) {}

  status() {
    return this.http.get(this.apiUrl + 'status');
  }
  find(url: String) {
    return this.http.get(this.apiUrl+url);
  }
  add(url: String, data: Object)
  {
    return this.http.post(this.apiUrl+url, data);
  }
  update(url: any, data: Object)
  {
    return this.http.put(this.apiUrl+url, data);
  }
  delete(url: any)
  {
    return this.http.delete(this.apiUrl+url);
  }
}
