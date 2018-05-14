import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map'; 
import { Upload } from './model/Upload';

@Injectable()
export class UploadService{

    baseUrl:string = 'http://localhost:5000/api/upload';
    constructor(private http: Http){}
    
    public createUpload(model: FormData): Observable<Upload> {
        return this.http.post(this.baseUrl, model).map(res=> res.json());
    } 
}