import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjektService} from '../services/projekt.service';
import {Projekt} from '../model/Projekt';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projekte',
  templateUrl: './projekte.component.html',
  styleUrls: ['./projekte.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjekteComponent implements OnInit {

  projekte:Projekt[] = new Array();
  constructor(private projekService:ProjektService,private router:Router) { }

  ngOnInit(): void {
    this.projekte = this.projekService.projekte;
  }
  clickProject(it:number){
    console.log(it);
    console.log(this.projekte[it].githubLink);
    window.open(this.projekte[it].githubLink);
  }
}
