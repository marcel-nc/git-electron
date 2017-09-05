import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
  
})
export class GithubComponent implements OnInit {
username: any;
pulls: any;

  constructor(private _githubService:GithubService) { 
  
    
  }

  search(){

      this._githubService.updateReponame(this.username);


    this._githubService.getpulls()
    .subscribe(pulls =>{
   console.log(pulls);
      this.pulls= pulls;
    });


    }

  ngOnInit() {
  }

}
