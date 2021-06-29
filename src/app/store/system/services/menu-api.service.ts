import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MenuItem } from "../interfaces/menu-item";
import { menuItems } from "../menu-items";

@Injectable({ providedIn: 'root' })
export class MenuApiService {
  constructor(private readonly http: HttpClient) {}

  public getMenuitems(): Observable<MenuItem[]> {
    return of(menuItems);
  }
}
