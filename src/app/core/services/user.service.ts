import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://api.github.com/users"

  constructor(private http: HttpClient) {}

  /**
   * Gets all users
   * @returns Observible
   */
  getUsers(){
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }
  /**
   * Gets a single user
   * @param username Username of user
   * @returns Observiable
   */
  getUser(username: string){
    return this.http.get(`${this.apiUrl}/${username}`);
  }

  test(username: string){
    this.http.get(`${this.apiUrl}/${username}`).subscribe(data => console.log(data))
  }
}
