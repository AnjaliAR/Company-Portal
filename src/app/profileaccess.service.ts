import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileaccessService {

  constructor() { }
  isLoggedIn(){
    return false;
  }

}
