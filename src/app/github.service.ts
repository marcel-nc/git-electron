import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username = '1990marcel';
  private client_id ='6faad5ce6694d0213a59';
private client_secret='b9df2d050a104d5c11bee854a972d4654a1fc217';
reponame: any;

  constructor(private _http:Http) {
    console.log('service init');
   }

  

getpulls(){
     return this._http.get('https://api.github.com/repos/'+this.reponame+'/pulls')
     .map(res => res.json());
   }


   updateReponame(reponame: string){
     this.reponame = reponame;

   }

}
