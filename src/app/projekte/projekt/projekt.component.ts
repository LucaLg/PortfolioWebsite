import { Component, OnInit } from '@angular/core';
import {ProjektService} from '../../services/projekt.service';
import {Projekt} from '../../model/Projekt';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-projekt',
  templateUrl: './projekt.component.html',
  styleUrls: ['./projekt.component.css']
})
export class ProjektComponent implements OnInit {
  projekt:Projekt;
  constructor(private projektService:ProjektService,private router:Router,private activeRoute:ActivatedRoute) { }
  params:number;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
        this.params  = params['id']
      })
    ;
    this.projekt = this.projektService.projekte[this.params];
  }
  openDemo(url:string){
    window.open(url);
  }
}
