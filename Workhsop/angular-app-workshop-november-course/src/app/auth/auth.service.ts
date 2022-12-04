import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, filter, of, Subscription, tap } from 'rxjs';
import { IUser } from '../shared/interfaces/index'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(
    filter((val): val is IUser | null => val !== undefined)
  );

  user: IUser | null = null;

  get isLoggedIn() {
    return this.user != null;
  }

  subscribtion: Subscription;

  constructor(private http: HttpClient) {
    this.subscribtion = this.user$.subscribe(user => {
      this.user = user;
    })
  }

  register(username: string, email: string, password: string, rePassword: string, tel?: string) {
    return this.http.post<IUser>('/api/register', { username, email, password, rePassword, tel })
      .pipe(tap(user => this.user$$.next(user)))
  }

  login(email: string, password: string,) {
    return this.http.post<IUser>('/api/login', { email, password })
      .pipe(tap(user => this.user$$.next(user)))

  }

  logout() {
    return this.http.post<void>('/api/logout', {})
      .pipe(tap(user => this.user$$.next(null)));
  }

  getProfile() {
    return this.http.get<IUser>('/api/users/profile')
      .pipe(
        tap(user => this.user$$.next(user)),
        catchError((err) => {
          this.user$$.next(null);
          return of(err); //[off(errors)]
        })
      );
  }

  setProfile(username: string, email: string, tel?: string) {
    return this.http.put<IUser>('/api/users/profile',{username, email,tel})
      .pipe(
        tap(user => this.user$$.next(user)),
        catchError((err) => {
          this.user$$.next(null);
          return of(err); //[off(errors)]
        })
      );
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
