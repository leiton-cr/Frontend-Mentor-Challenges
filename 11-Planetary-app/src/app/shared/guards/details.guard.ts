import { PlanetService } from './../services/planet.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsGuard implements CanActivate {
  
  constructor(
    private service:PlanetService,
    private router:Router
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // If the actual planet is null redirects to root.
    if(!this.service.planet){
      this.router.navigate(['/']);
      return false;
    } 

    return true;
  }
  
}
