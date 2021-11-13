import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuariosURL = environment.usuariosURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<NuevoUsuario[]> {
    return this.httpClient.get<NuevoUsuario[]>(this.usuariosURL);
  }

  public detail(id: number): Observable<NuevoUsuario> {
    return this.httpClient.get<NuevoUsuario>(this.usuariosURL + `${id}`);
  }

  public detailName(nombre: string): Observable<NuevoUsuario> {
    return this.httpClient.get<NuevoUsuario>(this.usuariosURL + `detalle/${nombre}`);
  }

  public save(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.usuariosURL, nuevoUsuario);
  }

  public update(id: number, nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.put<any>(this.usuariosURL + `${id}`, nuevoUsuario);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.usuariosURL + `${id}`);
  }
}