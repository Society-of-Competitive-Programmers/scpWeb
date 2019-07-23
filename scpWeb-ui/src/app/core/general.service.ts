import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SpotlightInfo, Meeting, UpcomingHackathon } from './classes/classes';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private sidenav: MatSidenav;

  private baseUrl: string;

  constructor(private http: HttpClient, private router: Router){
    this.baseUrl = this.router.url.split('?')[0].split('/')[0];
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getSpotlightInfo(): Observable<SpotlightInfo[]> {
    
    let url = this.baseUrl + "/spotlightInfo"
    
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"
      })
    };
    return this.http.get<SpotlightInfo[]>(url).pipe(
      tap(_ => console.log("Fetched Spotlight Info")),
      catchError(this.handleError<SpotlightInfo[]>(`getSpotlightInfo`))
    );
  }

  public getUHInfo(): Observable<UpcomingHackathon[]> {
    let url = this.baseUrl + "/upcomingHackathons"
    
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"
      })
    };
    return this.http.get<UpcomingHackathon[]>(url).pipe(
      tap(_ => console.log("Fetched Spotlight Info")),
      catchError(this.handleError<UpcomingHackathon[]>(`getSpotlightInfo`))
    );
  }

  public getWorkshopInfo(): Observable<Meeting[]> {
    let url = this.baseUrl + "/workshops"
    
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"
      })
    };
    return this.http.get<Meeting[]>(url).pipe(
      tap(_ => console.log("Fetched Spotlight Info")),
      catchError(this.handleError<Meeting[]>(`getSpotlightInfo`))
    );
  }

  public getHPInfo(): Observable<Meeting[]> {
    let url = this.baseUrl + "/hackathonPrep"
    
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"
      })
    };
    return this.http.get<Meeting[]>(url).pipe(
      tap(_ => console.log("Fetched Spotlight Info")),
      catchError(this.handleError<Meeting[]>(`getSpotlightInfo`))
    );
  }


  //Operating Sidenav
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public openSideNav() {
    return this.sidenav.open();
  }

  public closeSideNav() {
    return this.sidenav.close();
  }

  public toggleSideNav(): void {
    this.sidenav.toggle();
  }
}
