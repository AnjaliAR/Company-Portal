import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { profile } from 'console';
import { Observable } from 'rxjs';
import { ProfileaccessService } from './profileaccess.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {
  constructor(private service : ProfileaccessService){}
  canActivate(){
    
    if(this.service.isLoggedIn()) return true;
    else {
      window.alert("you are not authorized for this navigation");
      return false;
    }
  }
  
}
