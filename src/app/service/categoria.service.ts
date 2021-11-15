import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Categoria } from "../models/categoria";

@Injectable({
    providedIn: 'root'
  })
  
  export class CategoriaService {

    categoriaURL = environment.categoriaURL;
    
    constructor(private httpClient: HttpClient) { }

    public getCategorias(): Observable<Categoria []> {
      return this.httpClient.get<Categoria[]>(this.categoriaURL);
    }

    public getCategoria(id: number): Observable<Categoria> {
      return this.httpClient.get<any>(this.categoriaURL + id);
    }

    public postCategoria(categoria: Categoria): Observable<any> {
      console.log(categoria);
      return this.httpClient.post<any>(this.categoriaURL, categoria);
    }

    public putCategoria(categoria: any) {
      return this.httpClient.put<any>(this.categoriaURL, categoria);
    }

    public deleteCategoria(id: number) {
      return this.httpClient.delete<any>(this.categoriaURL + id);
    }

  }